"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const ng2_process_tree_1 = require("./ng2-process-tree");
const newCode = `public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 30,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];

  constructor() { }

  ngOnInit() {
  }`;
const newMarkup = `<div style="display: block;">
  <canvas baseChart
    [datasets]="bubbleChartData"
    [options]="bubbleChartOptions"
    [colors]="bubbleChartColors"
    [legend]="bubbleChartLegend"
    [chartType]="bubbleChartType">
  </canvas>
</div>
`;
const newImports = [
    ['ChartDataSets, ChartOptions, ChartType', 'chart.js'],
    ['Color', 'ng2-charts'],
];
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function ng2ChartsBubble(_options) {
    // console.log('options', _options);
    return schematics_1.chain([
        schematics_1.externalSchematic('@schematics/angular', 'component', _options),
        (tree, _context) => ng2_process_tree_1.ng2ProcessTree(tree, _context, _options, newCode, newMarkup, newImports)
    ]);
}
exports.ng2ChartsBubble = ng2ChartsBubble;
//# sourceMappingURL=ng2-charts-bubble.js.map