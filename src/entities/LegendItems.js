import LegendItem from "./LengendItem";
//Setting the choropleth map, more than 7 division
var legendItems = [
  new LegendItem(
    "1,200,000 +",
    "#4A0404",
    (cases) => cases >= 1_000_000,
    "white"
  ),
  new LegendItem(
    "800,000 - 1,199,999",
    "#8b0000",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "white"
    ),
  new LegendItem(
    "500,000 - 799,999",
    // "#741f1f",
    "#9e2a2a",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "white"
  ),

  new LegendItem(
    "200,000 - 499,999",
    "#b15555",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "100,000 - 199,999",
    "#c57f7f",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "50,000 - 99,999",
    "#d8aaaa",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 49,999",
    "#ebd4d4",
    (cases) => cases > 0 && cases < 50_000
  ),

  new LegendItem("No Data", "#ffffff", (cases) => true),
];

export default legendItems;