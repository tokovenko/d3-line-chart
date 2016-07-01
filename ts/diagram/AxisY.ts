import {Axis} from './Axis';

class AxisY extends Axis {
    getTransform() {
        return 'translate(10, 10)'
    }
    setOrient() {
        this._axis.orient("left");
    }
}

export {AxisY};
