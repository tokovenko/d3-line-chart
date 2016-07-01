import {Scale} from './Scale';

class ScaleY extends Scale {
    setRange() {
        let range = [this.diagram.getInnerHeight(), 0];
        this._scale.range(range);
    }
}

export {ScaleY};
