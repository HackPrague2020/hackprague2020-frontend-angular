"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ng2_process_tree_1 = require("./ng2-process-tree");
const newCode = `public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }`;
const newMarkup = `<div style="display: block;">
  <canvas baseChart
    [datasets]="scatterChartData"
    [options]="scatterChartOptions"
    [chartType]="scatterChartType">
  </canvas>
</div>
`;
const newImports = [
    ['ChartDataSets, ChartOptions, ChartType', 'chart.js'],
    ['Label', 'ng2-charts'],
];
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ng2ChartsScatter(_options) {
    // console.log('options', _options);
    return schematics_1.chain([
        schematics_1.externalSchematic('@schematics/angular', 'component', _options),
        (tree, _context) => ng2_process_tree_1.ng2ProcessTree(tree, _context, _options, newCode, newMarkup, newImports)
    ]);
}
exports.ng2ChartsScatter = ng2ChartsScatter;
//# sourceMappingURL=ng2-charts-scatter.js.map