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
COLOR_BORDER = "#E8E3DA"
PALETTE = [COLOR_ACCENT, COLOR_SECONDARY, COLOR_PRIMARY, "#D4A373", "#CCD5AE"]

# --- Custom CSS Styling ---
st.markdown(f"""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

    /* Global text and background */
    .stApp {{
        background-color: {COLOR_BG};
        color: {COLOR_PRIMARY};
        font-family: 'Inter', sans-serif;
    }}
    
    h1, h2, h3, .font-serif {{
        font-family: 'Playfair Display', Georgia, serif !important;
        color: {COLOR_PRIMARY} !important;
    }}

    /* Card styling */
    .kpi-card {{
        background-color: {COLOR_SURFACE};
        border: 1px solid {COLOR_BORDER};
        border-radius: 16px;
        padding: 18px 20px;
        box-shadow: 0 4px 14px -2px rgba(73, 51, 35, 0.05);
        margin-bottom: 12px;
        transition: transform 0.2s ease;
    }}
    .kpi-card:hover {{
        border-color: {COLOR_ACCENT};
    }}
    .kpi-label {{
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: {COLOR_SECONDARY};
        margin-bottom: 6px;
    }}
    .kpi-value {{
        font-size: 24px;
        font-weight: 700;
        color: {COLOR_PRIMARY};
        font-family: 'Playfair Display', Georgia, serif;
    }}
    .kpi-sub {{
        font-size: 11px;
        color: {COLOR_SECONDARY};
        margin-top: 4px;
    }}

    /* Notice banner */
    .notice-banner {{
        background-color: #FFF9F2;
        border-left: 4px solid {COLOR_ACCENT};
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 12px;
        color: {COLOR_PRIMARY};
        margin-bottom: 20px;
    }}

    /* Streamlit widget tweaks */
    div[data-testid="stSidebar"] {{
        background-color: #F1ECE1;
        border-right: 1px solid {COLOR_BORDER};
    }}
    
    .stTabs [data-baseweb="tab-list"] {{
        gap: 8px;
    }}
    .stTabs [data-baseweb="tab"] {{
        background-color: {COLOR_SURFACE};
        border: 1px solid {COLOR_BORDER};
        border-radius: 8px;
        padding: 8px 16px;
        color: {COLOR_PRIMARY};
        font-size: 13px;
        font-weight: 500;
    }}
    .stTabs [aria-selected="true"] {{
        background-color: {COLOR_PRIMARY} !important;
        color: #F8F5EF !important;
        border-color: {COLOR_PRIMARY} !important;
    }}
</style>
""", unsafe_allow_html=True)

# --- Data Loading Function (Reads from CSV) ---
@st.cache_data
def load_data():
    base_dir = Path(__file__).resolve().parent.parent
    raw_path = base_dir / "Raw-Data" / "google_ads_data.csv"
    
    if not raw_path.exists():
        raw_path = Path("Haven-and-Hue/Analytics/Raw-Data/google_ads_data.csv")
    
    if not raw_path.exists():
        st.error(f"Data file not found at: {raw_path}")
        return pd.DataFrame()

    df = pd.read_csv(raw_path)
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
    logo_path = Path(__file__).resolve().parent.parent.parent / "Brand-Identity" / "logo.png"
    if logo_path.exists():
        st.image(str(logo_path), use_container_width=True)
    else:
        st.title("Haven & Hue")
        st.caption("Home Decor • Digital Marketing Case Study")
    
    st.markdown("---")
    st.markdown("### 🔍 Filters & Settings")
    
    if not df_all.empty:
        min_date = df_all['Date'].min()
        max_date = df_all['Date'].max()
        
        selected_dates = st.date_input(
            "Select Date Range",
            value=(min_date, max_date),
            min_value=min_date,
            max_value=max_date
        )
        
        all_campaigns = sorted(df_all['Campaign'].unique().tolist())
        selected_campaigns = st.multiselect(
            "Select Campaigns",
            options=all_campaigns,
            default=all_campaigns
        )
    else:
        selected_dates = None
        selected_campaigns = []
        
    st.markdown("---")
    st.markdown("#### 📖 Project Info")
    st.info(
        "**Brand:** Haven & Hue\n\n"
        "**Context:** Student Advertising Experiment\n\n"
        "**Status:** Simulated Data – Academic Case Study\n\n"
        "**Duration:** 3 Days Initial Testing"
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
    st.markdown("<h1 style='margin-bottom: 4px;'>Haven & Hue — Google Ads Performance Dashboard</h1>", unsafe_allow_html=True)
    st.markdown("<p style='color: #85866A; font-size: 14px; margin-bottom: 12px;'>Early-Stage Campaign Performance Tracking • 3-Day Student Digital Marketing Experiment</p>", unsafe_allow_html=True)

with col_head2:
    st.markdown(f"""
    <div style='text-align: right; padding-top: 10px;'>
        <span style='background-color: {COLOR_PRIMARY}; color: #FFFFFF; font-size: 11px; padding: 4px 12px; border-radius: 20px; font-weight: 600;'>
            Reporting Period: 3 Days
        </span>
    </div>
    """, unsafe_allow_html=True)

# Mandatory Academic Disclaimer Notice
st.markdown("""
<div class="notice-banner">
    ⚠️ <strong>Simulated Data – Academic Case Study:</strong> This dashboard demonstrates early-stage advertising metrics for a small, student-managed advertising experiment running for three days. Figures represent simulated educational data. No live Google Ads campaigns were activated, and no real funds were expended.
</div>
""", unsafe_allow_html=True)

# --- KPI Metric Cards Row (9 Key Performance Indicators) ---
st.markdown("### 📌 Executive KPI Summary (3-Day Aggregate)")
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
        <div class="kpi-sub">Storefront visits</div>
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
        <div class="kpi-sub">Early keyword cost</div>
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

st.markdown("---")

# --- Interactive Analytical Tabs ---
tab1, tab2, tab3, tab4 = st.tabs([
    "📈 Visual Analytics & Charts",
    "📊 Campaign Comparison Table",
    "🎯 Targets vs. Simulated Actuals",
    "💡 Strategic Insights & Recommendations"
])

# ================= TAB 1: VISUAL CHARTS =================
with tab1:
    st.markdown("#### 1. Daily Campaign Volume Trends")
    chart_c1, chart_c2 = st.columns(2)
    
    daily_summary = filtered_df.groupby('Date')[['Impressions', 'Clicks', 'Cost', 'Conversions']].sum().reset_index()
    daily_summary['Date_Str'] = daily_summary['Date'].astype(str)
    
    with chart_c1:
        fig1 = go.Figure()
        fig1.add_trace(go.Bar(
            x=daily_summary['Date_Str'],
            y=daily_summary['Impressions'],
            name="Impressions",
            marker_color=COLOR_SECONDARY,
            yaxis="y1"
        ))
        fig1.add_trace(go.Scatter(
            x=daily_summary['Date_Str'],
            y=daily_summary['Clicks'],
            name="Clicks",
            line=dict(color=COLOR_ACCENT, width=3),
            mode="lines+markers",
            yaxis="y2"
        ))
        fig1.update_layout(
            title="Daily Impressions (Bar) vs. Clicks (Line)",
            paper_bgcolor=COLOR_SURFACE,
            plot_bgcolor=COLOR_SURFACE,
            font=dict(family="Inter", color=COLOR_PRIMARY),
            yaxis=dict(title="Impressions", showgrid=True, gridcolor="#EFEAE0"),
            yaxis2=dict(title="Clicks", overlaying="y", side="right", showgrid=False),
            legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
            margin=dict(l=40, r=40, t=50, b=40)
        )
        st.plotly_chart(fig1, use_container_width=True)

    with chart_c2:
        df_ctr = filtered_df.copy()
        df_ctr['CTR'] = (df_ctr['Clicks'] / df_ctr['Impressions']) * 100
        df_ctr['Date_Str'] = df_ctr['Date'].astype(str)
        
        fig2 = px.line(
            df_ctr,
            x="Date_Str",
            y="CTR",
            color="Campaign",
            markers=True,
            title="Daily Click-Through Rate (CTR %) by Campaign",
            color_discrete_sequence=[COLOR_ACCENT, COLOR_SECONDARY, COLOR_PRIMARY]
        )
        fig2.update_layout(
            paper_bgcolor=COLOR_SURFACE,
            plot_bgcolor=COLOR_SURFACE,
            font=dict(family="Inter", color=COLOR_PRIMARY),
            yaxis=dict(title="CTR (%)", showgrid=True, gridcolor="#EFEAE0"),
            xaxis=dict(title="Date"),
            legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
            margin=dict(l=40, r=40, t=50, b=40)
        )
        st.plotly_chart(fig2, use_container_width=True)

    st.markdown("#### 2. Financial & Conversion Performance")
    chart_c3, chart_c4 = st.columns(2)
    
    with chart_c3:
        spend_by_camp = filtered_df.groupby('Campaign')['Cost'].sum().reset_index()
        fig3 = px.pie(
            spend_by_camp,
            values="Cost",
            names="Campaign",
            title="Advertising Spend Distribution by Campaign (Total: ₹1,220)",
            hole=0.45,
            color_discrete_sequence=[COLOR_ACCENT, COLOR_SECONDARY, COLOR_PRIMARY]
        )
        fig3.update_layout(
            paper_bgcolor=COLOR_SURFACE,
            font=dict(family="Inter", color=COLOR_PRIMARY),
            margin=dict(l=40, r=40, t=50, b=40)
        )
        st.plotly_chart(fig3, use_container_width=True)

    with chart_c4:
        roas_camp = filtered_df.groupby('Campaign').agg({
            'Cost': 'sum',
            'Conversion Value': 'sum',
            'Conversions': 'sum'
        }).reset_index()
        roas_camp['ROAS'] = roas_camp.apply(lambda r: r['Conversion Value'] / r['Cost'] if r['Cost'] > 0 else 0.0, axis=1)
        
        fig4 = go.Figure()
        fig4.add_trace(go.Bar(
            x=roas_camp['Campaign'],
            y=roas_camp['Conversion Value'],
            name="Conversion Value (₹)",
            marker_color=COLOR_PRIMARY,
            yaxis="y1"
        ))
        fig4.add_trace(go.Scatter(
            x=roas_camp['Campaign'],
            y=roas_camp['ROAS'],
            name="ROAS (Multiplier)",
            line=dict(color=COLOR_ACCENT, width=3),
            mode="lines+markers",
            yaxis="y2"
        ))
        fig4.update_layout(
            title="Conversion Value (₹) vs. ROAS (Multiplier)",
            paper_bgcolor=COLOR_SURFACE,
            plot_bgcolor=COLOR_SURFACE,
            font=dict(family="Inter", color=COLOR_PRIMARY),
            yaxis=dict(title="Conversion Value (₹)", showgrid=True, gridcolor="#EFEAE0"),
            yaxis2=dict(title="ROAS (x)", overlaying="y", side="right", showgrid=False),
            legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
            margin=dict(l=40, r=40, t=50, b=40)
        )
        st.plotly_chart(fig4, use_container_width=True)

    st.markdown("#### 3. Small-Scale Marketing Acquisition Funnel")
    funnel_stages = ['Impressions (Ad Views)', 'Clicks (Site Visitors)', 'Add to Cart (Intent)', 'Purchases (Conversions)']
    funnel_values = [1850, 61, 6, 2]
    
    fig5 = go.Figure(go.Funnel(
        y=funnel_stages,
        x=funnel_values,
        textinfo="value+percent initial",
        marker=dict(color=[COLOR_SECONDARY, "#A3A380", COLOR_ACCENT, COLOR_PRIMARY]),
        connector={"line": {"color": COLOR_BORDER, "dash": "solid", "width": 1}}
    ))
    fig5.update_layout(
        title="Conversion Funnel: 1,850 Impressions → 61 Clicks → 6 Add to Cart → 2 Purchases",
        paper_bgcolor=COLOR_SURFACE,
        plot_bgcolor=COLOR_SURFACE,
        font=dict(family="Inter", color=COLOR_PRIMARY),
        margin=dict(l=40, r=40, t=50, b=40)
    )
    st.plotly_chart(fig5, use_container_width=True)

# ================= TAB 2: CAMPAIGN COMPARISON TABLE =================
with tab2:
    st.markdown("#### 📊 Multi-Metric Campaign Performance Matrix")
    
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
    
    st.dataframe(display_df, use_container_width=True, hide_index=True)
    
    st.markdown("#### 📅 Granular Daily Log (3-Day Natural Variations)")
    log_df = filtered_df.copy()
    log_df['CTR (%)'] = ((log_df['Clicks'] / log_df['Impressions']) * 100).round(2)
    log_df['CPC (₹)'] = (log_df['Cost'] / log_df['Clicks']).round(2)
    log_df['Conv. Rate (%)'] = ((log_df['Conversions'] / log_df['Clicks']) * 100).round(2)
    log_df['ROAS'] = (log_df['Conversion Value'] / log_df['Cost']).round(2)
    st.dataframe(log_df.sort_values(by=['Date', 'Campaign']), use_container_width=True, hide_index=True)

# ================= TAB 3: TARGETS VS SIMULATED =================
with tab3:
    st.markdown("#### 🎯 Benchmark Comparison: Proposed Campaign Targets vs. Simulated Performance")
    st.markdown(
        "Evaluating planned benchmarks against early 3-day student campaign test performance."
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
    
    st.info("ℹ️ **Observation on Sample Size:** With only 61 total clicks over 3 days, performance variances represent natural auction volatility and small-sample variability rather than definitive long-term trends.")

# ================= TAB 4: MARKETING INSIGHTS =================
with tab4:
    st.markdown("#### 💡 Strategic Insights & Student Project Recommendations")
    
    col_in1, col_in2 = st.columns(2)
    
    with col_in1:
        st.markdown(f"""
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; margin-bottom: 16px;'>
            <h4 style='color: {COLOR_ACCENT}; margin-top: 0;'>🔍 Initial Traffic Generation vs. Limited Conversion Data</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                Across the 3-day testing window, the campaign generated <strong>1,850 impressions</strong> and <strong>61 clicks</strong>, demonstrating initial keyword discoverability.
                <br>• However, with only <strong>2 recorded purchases</strong>, conversion data is strictly exploratory.
                <br>• In early advertising phases, 61 visitors is too small a statistical baseline to draw definitive conclusions regarding user preferences or permanent conversion efficacy.
            </p>
        </div>
        
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER};'>
            <h4 style='color: {COLOR_PRIMARY}; margin-top: 0;'>🖱️ Click Attraction & Campaign Characteristics</h4>
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
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER}; margin-bottom: 16px;'>
            <h4 style='color: {COLOR_SECONDARY}; margin-top: 0;'>⚖️ Acquisition Cost vs. Conversion Value</h4>
            <p style='font-size: 13px; line-height: 1.6; color: {COLOR_PRIMARY};'>
                • <strong>Total Advertising Expenditure:</strong> ₹1,220 across 3 days.
                <br>• <strong>Cost Per Acquisition (CPA):</strong> <strong>₹610.00</strong> per acquired order (₹1,220 / 2 conversions).
                <br>• <strong>Gross Revenue:</strong> ₹1,398.00 resulting in a modest <strong>1.15x ROAS</strong>.
                <br>• While the campaign technically broke even on ad spend, a ₹610 customer acquisition cost leaves very thin margins after considering packaging and fulfillment.
            </p>
        </div>
        
        <div style='background-color: {COLOR_SURFACE}; padding: 20px; border-radius: 14px; border: 1px solid {COLOR_BORDER};'>
            <h4 style='color: {COLOR_ACCENT}; margin-top: 0;'>🚀 Actionable Next Steps for Student Evaluation</h4>
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
    "<div style='text-align: center; color: #85866A; font-size: 12px;'>"
    "Haven & Hue Home Decor — Simulated Data – Academic Case Study • 3-Day Student Digital Marketing Experiment"
    "</div>",
    unsafe_allow_html=True
)
