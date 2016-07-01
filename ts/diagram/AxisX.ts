import {Axis} from './Axis';

class AxisX extends Axis {
    getTransform() {
        return `translate(10, ${this._scale.diagram.height - 30})`;
    }
    setOrient() {
        this._axis.orient("bottom");
    }
}

export {AxisX};
