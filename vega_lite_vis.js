var vg_1 = "labour_force_choropleth_map.vg.json";

vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "labour_force_bar_chart.vg.json";

vegaEmbed("#bar_chart", vg_2).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);
