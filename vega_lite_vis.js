var vg_1 = "/visualisations/choropleth_map.vg.json";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "/visualisations/stacked_bar_chart.vg.json";

vegaEmbed("#stacked_bar_chart", vg_2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "/visualisations/trellis_area_chart.vg.json";

vegaEmbed("#trellis_area_chart", vg_3).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_4 = "/visualisations/bump_chart.vg.json";

vegaEmbed("#bump_chart", vg_4).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_5 = "/visualisations/bump_chart_2.vg.json";

vegaEmbed("#bump_chart2", vg_5).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);
