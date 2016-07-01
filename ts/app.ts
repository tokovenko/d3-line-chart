import {Diagram} from './diagram/Diagram';
import {ScaleX} from './diagram/ScaleX';
import {ScaleY} from './diagram/ScaleY';
import {AxisX} from './diagram/AxisX';
import {AxisY} from './diagram/AxisY';
import {Graph} from './diagram/Graph';


const diagram = new Diagram(500, 500);
diagram.setMargin({top: 20, left: 100});
diagram.svgContainer.style('background', '#f4f4f4');

const scaleX = new ScaleX(diagram);
scaleX.setDomain(5);
diagram.addAxis(new AxisX(scaleX));

const scaleY = new ScaleY(diagram);
scaleY.setDomain(80);
diagram.addAxis(new AxisY(scaleY));

diagram.addGraph(new Graph([10, 20, 30, 20, 60], 'red'));
diagram.addGraph(new Graph([6, 55, 32, 55], 'blue'));
