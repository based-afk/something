import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from pathlib import Path
import os

# --- Page Configuration ---
st.set_page_config(
    page_title="Haven & Hue — Google Ads Performance Dashboard",
    page_icon="🏛️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --- Brand Color Constants ---
COLOR_BG = "#F8F5EF"
COLOR_PRIMARY = "#493323"
COLOR_SECONDARY = "#85866A"
COLOR_ACCENT = "#B77D5C"
COLOR_SURFACE = "#FFFFFF"
COLOR_BORDER = "#DED6C7"
PALETTE = [COLOR_ACCENT, COLOR_SECONDARY, COLOR_PRIMARY, "#C88A58", "#9E9F7F"]

# --- High-Contrast Custom CSS Styling ---
st.markdown(f"""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

    /* Global canvas & text */
    .stApp {{
        background-color: {COLOR_BG} !important;
        color: {COLOR_PRIMARY} !important;
        font-family: 'Inter', -apple-system, sans-serif !important;
    }}
    
    h1, h2, h3, h4, .font-serif {{
        font-family: 'Playfair Display', Georgia, serif !important;
        color: {COLOR_PRIMARY} !important;
        font-weight: 600 !important;
    }}

    /* Global text color override for Streamlit labels */
    p, span, label, div {{
        color: {COLOR_PRIMARY};
    }}

    /* Top KPI Metric Cards */
    .kpi-card {{
        background-color: {COLOR_SURFACE};
        border: 1px solid {COLOR_BORDER};
        border-radius: 14px;
        padding: 16px 18px;
        box-shadow: 0 4px 12px rgba(73, 51, 35, 0.05);
        margin-bottom: 12px;
        transition: transform 0.15s ease, border-color 0.15s ease;
    }}
    .kpi-card:hover {{
        border-color: {COLOR_ACCENT};
        transform: translateY(-2px);
    }}
    .kpi-label {{
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: {COLOR_SECONDARY};
        margin-bottom: 4px;
    }}
    .kpi-value {{
        font-size: 26px;
        font-weight: 800;
        color: {COLOR_PRIMARY};
        font-family: 'Playfair Display', Georgia, serif;
        line-height: 1.15;
    }}
    .kpi-sub {{
        font-size: 11px;
        color: #6B5B4E;
        font-weight: 500;
        margin-top: 4px;
    }}

    /* Notice Banner */
    .notice-banner {{
        background-color: #FFF8EE;
        border: 1px solid #ECCFA4;
        border-left: 5px solid {COLOR_ACCENT};
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 13px;
        color: {COLOR_PRIMARY};
        line-height: 1.5;
        margin-bottom: 22px;
        font-weight: 500;
    }}

    /* ================= TABS CONTRAST FIX ================= */
    .stTabs [data-baseweb="tab-list"] {{
        gap: 8px;
        border-bottom: 2px solid {COLOR_BORDER};
        padding-bottom: 4px;
    }}
    
    /* Unselected tab button */
    .stTabs [data-baseweb="tab"] {{
        background-color: #EFE9DE !important;
        border: 1px solid {COLOR_BORDER} !important;
        border-radius: 8px 8px 0 0 !important;
        padding: 10px 18px !important;
        color: {COLOR_PRIMARY} !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        opacity: 1 !important;
    }}
    .stTabs [data-baseweb="tab"]:hover {{
        background-color: #E5DDD0 !important;
        color: {COLOR_ACCENT} !important;
    }}
    
    /* Active (Selected) tab button */
    .stTabs [aria-selected="true"] {{
        background-color: {COLOR_PRIMARY} !important;
        color: #FFFFFF !important;
        border-color: {COLOR_PRIMARY} !important;
        font-weight: 700 !important;
    }}
    .stTabs [aria-selected="true"] span, .stTabs [aria-selected="true"] div {{
        color: #FFFFFF !important;
    }}

    /* ================= TABLE CONTRAST FIX ================= */
    [data-testid="stTable"] table, table {{
        width: 100% !important;
        border-collapse: separate !important;
        border-spacing: 0 !important;
        border: 1px solid {COLOR_BORDER} !important;
        border-radius: 10px !important;
        overflow: hidden !important;
        font-family: 'Inter', sans-serif !important;
    }}
    
    /* Table Header */
    [data-testid="stTable"] th, table th {{
        background-color: {COLOR_PRIMARY} !important;
        color: #FFFFFF !important;
        font-weight: 700 !important;
        font-size: 13px !important;
        padding: 12px 14px !important;
        text-align: left !important;
        border-bottom: 2px solid {COLOR_BORDER} !important;
        border-right: 1px solid rgba(255, 255, 255, 0.15) !important;
    }}
    
    /* Table Data Cells */
    [data-testid="stTable"] td, table td {{
        background-color: #FFFFFF !important;
        color: #382417 !important;
        font-weight: 500 !important;
        font-size: 13px !important;
        padding: 12px 14px !important;
        border-bottom: 1px solid #ECE6DC !important;
        border-right: 1px solid #ECE6DC !important;
    }}
    
    /* Table Alternating Row */
    [data-testid="stTable"] tr:nth-child(even) td, table tr:nth-child(even) td {{
        background-color: #FAF7F2 !important;
    }}

    /* ================= INFO / ALERT BOX FIX ================= */
    .info-card {{
        background-color: #F1EFEA;
        border: 1px solid #D5CCC0;
        border-left: 5px solid {COLOR_SECONDARY};
        border-radius: 8px;
        padding: 14px 18px;
        color: {COLOR_PRIMARY};
        font-size: 13px;
        line-height: 1.5;
        margin-top: 14px;
        font-weight: 500;
    }}

    /* Sidebar adjustments */
    section[data-testid="stSidebar"] {{
        background-color: #EFE9DE !important;
        border-right: 1px solid {COLOR_BORDER} !important;
    }}
    section[data-testid="stSidebar"] p, section[data-testid="stSidebar"] span {{
        color: {COLOR_PRIMARY} !important;
    }}
</style>
""", unsafe_allow_html=True)

# --- Data Loading Function (Reads from CSV) ---
@st.cache_data
def load_data():
    app_dir = Path(__file__).resolve().parent
    candidates = [
        app_dir.parent / "Raw-Data" / "google_ads_data.csv",
        app_dir.parent / "Processed-Data" / "google_ads_processed.csv",
        Path("Analytics/Raw-Data/google_ads_data.csv"),
        Path("Raw-Data/google_ads_data.csv"),
        Path("Haven-and-Hue/Analytics/Raw-Data/google_ads_data.csv"),
        app_dir.parent.parent / "Analytics" / "Raw-Data" / "google_ads_data.csv"
    ]
    
    target_path = None
    for p in candidates:
        if p.exists():
            target_path = p
            break

    if not target_path:
        st.error(f"Data file could not be found. Checked candidate paths: {[str(c) for c in candidates]}")
        return pd.DataFrame()

    df = pd.read_csv(target_path)
    df['Date'] = pd.to_datetime(df['Date']).dt.date
    return df

# Helper to calculate derived metrics safely
def compute_metrics(data_df):
    if data_df.empty:
        return 0, 0, 0.0, 0.0, 0.0, 0, 0.0, 0.0, 0.0
    
    imp = int(data_df['Impressions'].sum())
    clicks = int(data_df['Clicks'].sum())
    cost = float(data_df['Cost'].sum())
    conv = int(data_df['Conversions'].sum())
    val = float(data_df['Conversion Value'].sum())
    
    ctr = (clicks / imp * 100) if imp > 0 else 0.0
    cpc = (cost / clicks) if clicks > 0 else 0.0
    cvr = (conv / clicks * 100) if clicks > 0 else 0.0
    roas = (val / cost) if cost > 0 else 0.0
    
    return imp, clicks, ctr, cost, cpc, conv, cvr, val, roas

# Load dataset
df_all = load_data()

# --- Sidebar Controls & Filters ---
with st.sidebar:
    app_dir = Path(__file__).resolve().parent
    logo_candidates = [
        app_dir.parent.parent / "Brand-Identity" / "logo.png",
        Path("Brand-Identity/logo.png"),
        Path("Haven-and-Hue/Brand-Identity/logo.png"),
        app_dir.parent.parent / "Website" / "public" / "assets" / "logo.png",
        Path("Website/public/assets/logo.png"),
        Path("public/assets/logo.png")
    ]
    logo_file = None
    for lp in logo_candidates:
        if lp.exists():
            logo_file = lp
            break

    if logo_file:
        st.image(str(logo_file), use_container_width=True)
    else:
        st.markdown(f"<h2 style='color: {COLOR_PRIMARY};'>Haven & Hue</h2>", unsafe_allow_html=True)
        st.caption("Home Decor • Digital Marketing Case Study")
    
    st.markdown("---")
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-bottom: 8px;'>🔍 Filters & Controls</h4>", unsafe_allow_html=True)
    
    if not df_all.empty:
        min_date = df_all['Date'].min()
        max_date = df_all['Date'].max()
        
        selected_dates = st.date_input(
            "Reporting Date Window",
            value=(min_date, max_date),
            min_value=min_date,
            max_value=max_date
        )
        
        all_campaigns = sorted(df_all['Campaign'].unique().tolist())
        selected_campaigns = st.multiselect(
            "Filter Campaigns",
            options=all_campaigns,
            default=all_campaigns
        )
    else:
        selected_dates = None
        selected_campaigns = []
        
    st.markdown("---")
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-bottom: 8px;'>📖 Academic Case Study</h4>", unsafe_allow_html=True)
    st.markdown(
        f"<div style='font-size: 12px; line-height: 1.6; color: {COLOR_PRIMARY};'>"
        f"<strong>Brand:</strong> Haven & Hue<br>"
        f"<strong>Experiment:</strong> 3-Day Student Trial<br>"
        f"<strong>Total Budget:</strong> ₹1,220.00<br>"
        f"<strong>Status:</strong> Simulated Benchmark Data"
        f"</div>",
        unsafe_allow_html=True
    )

# Filter dataset based on selections
if isinstance(selected_dates, tuple) and len(selected_dates) == 2:
    start_d, end_d = selected_dates
    filtered_df = df_all[
        (df_all['Date'] >= start_d) &
        (df_all['Date'] <= end_d) &
        (df_all['Campaign'].isin(selected_campaigns))
    ].copy()
else:
    filtered_df = df_all[df_all['Campaign'].isin(selected_campaigns)].copy()

# Compute overall metrics for filtered slice
tot_imp, tot_clicks, tot_ctr, tot_cost, tot_cpc, tot_conv, tot_cvr, tot_val, tot_roas = compute_metrics(filtered_df)

# --- Header Section ---
col_head1, col_head2 = st.columns([3, 1])
with col_head1:
    st.markdown(f"<h1 style='color: {COLOR_PRIMARY}; margin-bottom: 4px; font-size: 32px;'>Haven & Hue — Google Ads Performance Dashboard</h1>", unsafe_allow_html=True)
    st.markdown(f"<p style='color: {COLOR_SECONDARY}; font-size: 14px; margin-bottom: 12px; font-weight: 500;'>Early-Stage Campaign Performance Tracking • 3-Day Student Digital Marketing Experiment</p>", unsafe_allow_html=True)

with col_head2:
    st.markdown(f"""
    <div style='text-align: right; padding-top: 10px;'>
        <span style='background-color: {COLOR_PRIMARY}; color: #FFFFFF; font-size: 12px; padding: 6px 14px; border-radius: 20px; font-weight: 700; letter-spacing: 0.03em;'>
            Reporting: 3 Days
        </span>
    </div>
    """, unsafe_allow_html=True)

# Mandatory Academic Disclaimer Notice
st.markdown(f"""
<div class="notice-banner">
    ⚠️ <strong>Simulated Data – Academic Case Study:</strong> This dashboard demonstrates early-stage advertising metrics for a small, student-managed advertising experiment running for three days. Figures represent simulated educational data. No live Google Ads campaigns were activated, and no real funds were expended.
</div>
""", unsafe_allow_html=True)

# --- KPI Metric Cards Row (9 Key Performance Indicators) ---
st.markdown(f"<h3 style='color: {COLOR_PRIMARY}; font-size: 20px; margin-bottom: 12px;'>📌 Executive KPI Summary (3-Day Aggregate)</h3>", unsafe_allow_html=True)
kpi_cols1 = st.columns(5)
kpi_cols2 = st.columns(4)

with kpi_cols1[0]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Total Impressions</div>
        <div class="kpi-value">{tot_imp:,}</div>
        <div class="kpi-sub">Ad view exposures</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols1[1]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Total Clicks</div>
        <div class="kpi-value">{tot_clicks:,}</div>
        <div class="kpi-sub">Storefront visitors</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols1[2]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Click-Through Rate</div>
        <div class="kpi-value">{tot_ctr:.2f}%</div>
        <div class="kpi-sub">Benchmark: ~3.00%</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols1[3]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Total Ad Spend</div>
        <div class="kpi-value">₹{tot_cost:,.2f}</div>
        <div class="kpi-sub">Student trial budget</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols1[4]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Average CPC</div>
        <div class="kpi-value">₹{tot_cpc:.2f}</div>
        <div class="kpi-sub">Initial keyword cost</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols2[0]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Total Conversions</div>
        <div class="kpi-value">{tot_conv:,}</div>
        <div class="kpi-sub">Simulated purchases</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols2[1]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Conversion Rate</div>
        <div class="kpi-value">{tot_cvr:.2f}%</div>
        <div class="kpi-sub">2 orders from 61 clicks</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols2[2]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Conversion Value</div>
        <div class="kpi-value">₹{tot_val:,.2f}</div>
        <div class="kpi-sub">Wall Art + Vases</div>
    </div>
    """, unsafe_allow_html=True)

with kpi_cols2[3]:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">Return on Ad Spend</div>
        <div class="kpi-value">{tot_roas:.2f}x</div>
        <div class="kpi-sub">Initial breakeven test</div>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<div style='height: 10px;'></div>", unsafe_allow_html=True)

# Helper function to create standard high-contrast Plotly layouts
def apply_chart_style(fig, title_text, y1_title, y2_title=None):
    fig.update_layout(
        title=dict(
            text=f"<b>{title_text}</b>",
            font=dict(family="Playfair Display", size=15, color=COLOR_PRIMARY),
            x=0.02,
            y=0.95
        ),
        paper_bgcolor="#FFFFFF",
        plot_bgcolor="#FFFFFF",
        font=dict(family="Inter", size=12, color=COLOR_PRIMARY),
        legend=dict(
            orientation="h",
            yanchor="bottom",
            y=1.03,
            xanchor="right",
            x=0.98,
            font=dict(color=COLOR_PRIMARY, size=11, family="Inter")
        ),
        margin=dict(l=45, r=45, t=55, b=45)
    )
    fig.update_xaxes(
        title_font=dict(color=COLOR_PRIMARY, size=12, family="Inter"),
        tickfont=dict(color=COLOR_PRIMARY, size=11, family="Inter"),
        showgrid=True,
        gridcolor="#EFECE5",
        linecolor=COLOR_BORDER
    )
    fig.update_yaxes(
        title=dict(text=f"<b>{y1_title}</b>", font=dict(color=COLOR_PRIMARY, size=12)),
        tickfont=dict(color=COLOR_PRIMARY, size=11, family="Inter"),
        showgrid=True,
        gridcolor="#EFECE5",
        linecolor=COLOR_BORDER
    )
    if y2_title:
        fig.update_layout(
            yaxis2=dict(
                title=dict(text=f"<b>{y2_title}</b>", font=dict(color=COLOR_ACCENT, size=12)),
                tickfont=dict(color=COLOR_ACCENT, size=11, family="Inter"),
                overlaying="y",
                side="right",
                showgrid=False
            )
        )
    return fig

# --- Interactive Analytical Tabs ---
tab1, tab2, tab3, tab4 = st.tabs([
    "📈 Visual Analytics & Charts",
    "📊 Campaign Comparison Table",
    "🎯 Targets vs. Simulated Actuals",
    "💡 Strategic Insights & Recommendations"
])

# ================= TAB 1: VISUAL CHARTS =================
with tab1:
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 10px; margin-bottom: 8px;'>1. Daily Campaign Volume Trends</h4>", unsafe_allow_html=True)
    chart_c1, chart_c2 = st.columns(2)
    
    # Map dates to clean labels
    date_labels = {
        min_date: "Day 1 (Nov 14)",
        (min_date + pd.Timedelta(days=1)): "Day 2 (Nov 15)",
        max_date: "Day 3 (Nov 16)"
    }
    
    daily_summary = filtered_df.groupby('Date')[['Impressions', 'Clicks', 'Cost', 'Conversions']].sum().reset_index()
    daily_summary['Day_Label'] = daily_summary['Date'].map(lambda d: date_labels.get(d, str(d)))
    
    # Chart 1: Daily Impressions & Clicks with clean integer scales
    with chart_c1:
        fig1 = go.Figure()
        fig1.add_trace(go.Bar(
            x=daily_summary['Day_Label'],
            y=daily_summary['Impressions'],
            name="Impressions (Ad Views)",
            marker_color=COLOR_SECONDARY,
            yaxis="y1"
        ))
        fig1.add_trace(go.Scatter(
            x=daily_summary['Day_Label'],
            y=daily_summary['Clicks'],
            name="Clicks (Site Visits)",
            line=dict(color=COLOR_ACCENT, width=3.5),
            marker=dict(size=8, color=COLOR_ACCENT),
            mode="lines+markers",
            yaxis="y2"
        ))
        apply_chart_style(fig1, "Daily Impressions (Bar) vs. Clicks (Line)", "Impressions", "Clicks")
        fig1.update_layout(yaxis=dict(range=[0, 800], dtick=200))
        fig1.update_layout(yaxis2=dict(range=[0, 30], dtick=5, overlaying="y", side="right", showgrid=False))
        st.plotly_chart(fig1, use_container_width=True)

    # Chart 2: Daily CTR Trend
    with chart_c2:
        df_ctr = filtered_df.copy()
        df_ctr['CTR'] = (df_ctr['Clicks'] / df_ctr['Impressions']) * 100
        df_ctr['Day_Label'] = df_ctr['Date'].map(lambda d: date_labels.get(d, str(d)))
        
        # Clean campaign names
        df_ctr['Campaign_Short'] = df_ctr['Campaign'].str.replace('Campaign ', 'C').str.replace(' & Decor', '').str.replace(' & Ambience', '')
        
        fig2 = px.line(
            df_ctr,
            x="Day_Label",
            y="CTR",
            color="Campaign_Short",
            markers=True,
            color_discrete_sequence=[COLOR_PRIMARY, COLOR_SECONDARY, COLOR_ACCENT]
        )
        apply_chart_style(fig2, "Daily Click-Through Rate (CTR %) by Campaign", "CTR (%)")
        fig2.update_yaxes(range=[2.0, 4.5], dtick=0.5, ticksuffix="%")
        st.plotly_chart(fig2, use_container_width=True)

    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 14px; margin-bottom: 8px;'>2. Financial & Conversion Performance</h4>", unsafe_allow_html=True)
    chart_c3, chart_c4 = st.columns(2)
    
    # Chart 3: Spend Distribution Donut Chart
    with chart_c3:
        spend_by_camp = filtered_df.groupby('Campaign')['Cost'].sum().reset_index()
        spend_by_camp['Campaign_Label'] = spend_by_camp['Campaign'].str.replace('Campaign ', 'Camp. ')
        
        fig3 = px.pie(
            spend_by_camp,
            values="Cost",
            names="Campaign_Label",
            hole=0.45,
            color_discrete_sequence=[COLOR_ACCENT, COLOR_SECONDARY, COLOR_PRIMARY]
        )
        fig3.update_traces(
            textposition='inside',
            textinfo='percent+label',
            textfont=dict(color="#FFFFFF", size=11, family="Inter")
        )
        apply_chart_style(fig3, "Spend Distribution by Campaign (Total: ₹1,220)", "")
        fig3.update_layout(showlegend=True)
        st.plotly_chart(fig3, use_container_width=True)

    # Chart 4: Conversion Value vs. ROAS
    with chart_c4:
        roas_camp = filtered_df.groupby('Campaign').agg({
            'Cost': 'sum',
            'Conversion Value': 'sum',
            'Conversions': 'sum'
        }).reset_index()
        roas_camp['ROAS'] = roas_camp.apply(lambda r: r['Conversion Value'] / r['Cost'] if r['Cost'] > 0 else 0.0, axis=1)
        roas_camp['Short_Name'] = ["Wall Art", "Accessories", "Lighting"]
        
        fig4 = go.Figure()
        fig4.add_trace(go.Bar(
            x=roas_camp['Short_Name'],
            y=roas_camp['Conversion Value'],
            name="Conversion Value (₹)",
            marker_color=COLOR_PRIMARY,
            yaxis="y1"
        ))
        fig4.add_trace(go.Scatter(
            x=roas_camp['Short_Name'],
            y=roas_camp['ROAS'],
            name="ROAS (Multiplier)",
            line=dict(color=COLOR_ACCENT, width=3.5),
            marker=dict(size=8, color=COLOR_ACCENT),
            mode="lines+markers",
            yaxis="y2"
        ))
        apply_chart_style(fig4, "Conversion Value (₹) vs. ROAS (Multiplier)", "Revenue (₹)", "ROAS (x)")
        fig4.update_layout(yaxis=dict(range=[0, 1000], dtick=200, tickprefix="₹"))
        fig4.update_layout(yaxis2=dict(range=[0, 2.5], dtick=0.5, ticksuffix="x", overlaying="y", side="right", showgrid=False))
        st.plotly_chart(fig4, use_container_width=True)

    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 14px; margin-bottom: 8px;'>3. Small-Scale Marketing Acquisition Funnel</h4>", unsafe_allow_html=True)
    funnel_stages = ['Impressions (Ad Views)', 'Clicks (Storefront Visits)', 'Add to Cart (High Intent)', 'Purchases (Conversions)']
    funnel_values = [1850, 61, 6, 2]
    
    fig5 = go.Figure(go.Funnel(
        y=funnel_stages,
        x=funnel_values,
        textinfo="value+percent initial",
        textfont=dict(color="#FFFFFF", size=12, family="Inter"),
        marker=dict(color=[COLOR_SECONDARY, "#9E9F7F", COLOR_ACCENT, COLOR_PRIMARY]),
        connector={"line": {"color": COLOR_BORDER, "dash": "solid", "width": 1.5}}
    ))
    apply_chart_style(fig5, "Funnel: 1,850 Impressions → 61 Clicks → 6 Add to Cart → 2 Purchases", "")
    st.plotly_chart(fig5, use_container_width=True)

# ================= TAB 2: CAMPAIGN COMPARISON TABLE =================
with tab2:
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 10px; margin-bottom: 8px;'>📊 Multi-Metric Campaign Performance Matrix</h4>", unsafe_allow_html=True)
    
    camp_summary = filtered_df.groupby('Campaign').agg({
        'Impressions': 'sum',
        'Clicks': 'sum',
        'Cost': 'sum',
        'Conversions': 'sum',
        'Conversion Value': 'sum'
    }).reset_index()
    
    camp_summary['CTR (%)'] = (camp_summary['Clicks'] / camp_summary['Impressions']) * 100
    camp_summary['Avg CPC (₹)'] = camp_summary['Cost'] / camp_summary['Clicks']
    camp_summary['Conv. Rate (%)'] = (camp_summary['Conversions'] / camp_summary['Clicks']) * 100
    camp_summary['ROAS'] = camp_summary['Conversion Value'] / camp_summary['Cost']
    
    display_df = camp_summary.copy()
    display_df['Cost'] = display_df['Cost'].apply(lambda x: f"₹{x:,.2f}")
    display_df['Conversion Value'] = display_df['Conversion Value'].apply(lambda x: f"₹{x:,.2f}")
    display_df['Avg CPC (₹)'] = display_df['Avg CPC (₹)'].apply(lambda x: f"₹{x:.2f}")
    display_df['CTR (%)'] = display_df['CTR (%)'].apply(lambda x: f"{x:.2f}%")
    display_df['Conv. Rate (%)'] = display_df['Conv. Rate (%)'].apply(lambda x: f"{x:.2f}%")
    display_df['ROAS'] = display_df['ROAS'].apply(lambda x: f"{x:.2f}x")
    
    st.table(display_df)
    
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 18px; margin-bottom: 8px;'>📅 Granular Daily Log (3-Day Natural Variations)</h4>", unsafe_allow_html=True)
    log_df = filtered_df.copy()
    log_df['CTR (%)'] = ((log_df['Clicks'] / log_df['Impressions']) * 100).round(2).apply(lambda x: f"{x:.2f}%")
    log_df['CPC (₹)'] = (log_df['Cost'] / log_df['Clicks']).round(2).apply(lambda x: f"₹{x:.2f}")
    log_df['Cost (₹)'] = log_df['Cost'].apply(lambda x: f"₹{x:,.2f}")
    log_df['Value (₹)'] = log_df['Conversion Value'].apply(lambda x: f"₹{x:,.2f}")
    log_df['ROAS'] = (log_df['Conversion Value'] / log_df['Cost']).round(2).apply(lambda x: f"{x:.2f}x")
    
    cols_to_show = ['Date', 'Campaign', 'Impressions', 'Clicks', 'Cost (₹)', 'CPC (₹)', 'CTR (%)', 'Conversions', 'Value (₹)', 'ROAS']
    st.table(log_df[cols_to_show].sort_values(by=['Date', 'Campaign']))

# ================= TAB 3: TARGETS VS SIMULATED =================
with tab3:
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 10px; margin-bottom: 8px;'>🎯 Benchmark Comparison: Proposed Campaign Targets vs. Simulated Performance</h4>", unsafe_allow_html=True)
    st.markdown(
        f"<p style='color: {COLOR_PRIMARY}; font-size: 13px; font-weight: 500;'>"
        f"Evaluating planned benchmarks against early 3-day student campaign test performance."
        f"</p>",
        unsafe_allow_html=True
    )
    
    target_data = [
        {
            "Metric": "Click-Through Rate (CTR)",
            "Campaign 1 (Wall Art)": "3.28% (Target: ~3.00%)",
            "Campaign 2 (Accessories)": "3.41% (Target: ~3.20%)",
            "Campaign 3 (Lighting)": "3.11% (Target: ~2.80%)",
            "Overall Result": "3.30% (Modest, healthy search CTR for new brand)"
        },
        {
            "Metric": "Average Cost Per Click (CPC)",
            "Campaign 1 (Wall Art)": "₹21.58 (Target: ₹20.00)",
            "Campaign 2 (Accessories)": "₹16.79 (Target: ₹16.00)",
            "Campaign 3 (Lighting)": "₹24.29 (Target: ₹22.00)",
            "Overall Result": "₹20.00 (Consistent with modest non-optimized bidding)"
        },
        {
            "Metric": "Conversions & Rate",
            "Campaign 1 (Wall Art)": "1 Order (5.26%)",
            "Campaign 2 (Accessories)": "1 Order (3.57%)",
            "Campaign 3 (Lighting)": "0 Orders (0.00%)",
            "Overall Result": "2 Orders (3.28% of total 61 clicks)"
        },
        {
            "Metric": "Return on Ad Spend (ROAS)",
            "Campaign 1 (Wall Art)": "1.95x (₹799 value on ₹410 spend)",
            "Campaign 2 (Accessories)": "1.27x (₹599 value on ₹470 spend)",
            "Campaign 3 (Lighting)": "0.00x (₹0 value on ₹340 spend)",
            "Overall Result": "1.15x (Near breakeven on early exploration)"
        }
    ]
    st.table(pd.DataFrame(target_data))
    
    st.markdown(f"""
    <div class="info-card">
        ℹ️ <strong>Observation on Sample Size:</strong> With only 61 total clicks over 3 days, performance variances represent natural auction volatility and small-sample variability rather than definitive long-term trends.
    </div>
    """, unsafe_allow_html=True)

# ================= TAB 4: MARKETING INSIGHTS =================
with tab4:
    st.markdown(f"<h4 style='color: {COLOR_PRIMARY}; margin-top: 10px; margin-bottom: 8px;'>💡 Strategic Insights & Student Project Recommendations</h4>", unsafe_allow_html=True)
    
    col_in1, col_in2 = st.columns(2)
    
    with col_in1:
        st.markdown(f"""
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(73, 51, 35, 0.04);'>
            <h4 style='color: {COLOR_ACCENT}; margin-top: 0; font-size: 16px;'>🔍 Initial Traffic Generation vs. Limited Conversion Data</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                Across the 3-day testing window, the campaign generated <strong>1,850 impressions</strong> and <strong>61 clicks</strong>, demonstrating initial keyword discoverability.
                <br>• However, with only <strong>2 recorded purchases</strong>, conversion data is strictly exploratory.
                <br>• In early advertising phases, 61 visitors is too small a statistical baseline to draw definitive conclusions regarding user preferences or permanent conversion efficacy.
            </p>
        </div>
        
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; box-shadow: 0 4px 12px rgba(73, 51, 35, 0.04);'>
            <h4 style='color: {COLOR_PRIMARY}; margin-top: 0; font-size: 16px;'>🖱️ Click Attraction & Campaign Characteristics</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                <strong>Campaign 2 (Home Accessories)</strong> captured the highest interest:
                <br>• <strong>Top Clicks:</strong> 28 of the 61 total clicks (45.9% of traffic) at an affordable average CPC of <strong>₹16.79</strong>.
                <br>• <strong>Wall Art (Campaign 1):</strong> Generated 19 clicks and 1 purchase of Decorative Wall Art (₹799).
                <br>• <strong>Lighting (Campaign 3):</strong> Drew 14 clicks at a higher CPC of <strong>₹24.29</strong> without any conversions, reflecting higher hesitation for a ₹1,299 item within a brief 3-day test.
            </p>
        </div>
        """, unsafe_allow_html=True)

    with col_in2:
        st.markdown(f"""
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(73, 51, 35, 0.04);'>
            <h4 style='color: {COLOR_SECONDARY}; margin-top: 0; font-size: 16px;'>⚖️ Acquisition Cost vs. Conversion Value</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                • <strong>Total Advertising Expenditure:</strong> ₹1,220 across 3 days.
                <br>• <strong>Cost Per Acquisition (CPA):</strong> <strong>₹610.00</strong> per acquired order (₹1,220 / 2 conversions).
                <br>• <strong>Gross Revenue:</strong> ₹1,398.00 resulting in a modest <strong>1.15x ROAS</strong>.
                <br>• While the campaign technically broke even on ad spend, a ₹610 customer acquisition cost leaves very thin margins after considering packaging and fulfillment.
            </p>
        </div>
        
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; box-shadow: 0 4px 12px rgba(73, 51, 35, 0.04);'>
            <h4 style='color: {COLOR_ACCENT}; margin-top: 0; font-size: 16px;'>🚀 Actionable Next Steps for Student Evaluation</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                1. <strong>Do Not Make Drastic Budget Shifts Yet:</strong> With only 3 days and 61 clicks, collecting more data (minimum 200–300 clicks over 14 days) is critical before altering campaign budgets.
                <br>2. <strong>Address the Funnel Drop-off:</strong> 6 users added items to their cart, but only 2 completed checkout. Adding trust badges, shipping timelines, or a first-purchase incentive can lift checkout completion.
                <br>3. <strong>Refine Keyword Matching:</strong> Review search terms reports to prune broad terms in Campaign 3 (Lighting) to reduce average CPC from ₹24.29 toward ₹18.00.
                <br>4. <strong>Improve Product Detail Engagement:</strong> Add dimension diagrams and room-pairing suggestions to reduce bounce rates.
            </p>
        </div>
        """, unsafe_allow_html=True)

# Footer
st.markdown("---")
st.markdown(
    f"<div style='text-align: center; color: {COLOR_SECONDARY}; font-size: 12px; font-weight: 500;'>"
    "Haven & Hue Home Decor — Simulated Data – Academic Case Study • 3-Day Student Digital Marketing Experiment"
    "</div>",
    unsafe_allow_html=True
)
