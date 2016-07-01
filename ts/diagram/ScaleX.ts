import {Scale} from './Scale';

class ScaleX extends Scale {
    setRange() {
        let range = [0, this.diagram.getInnerWidth()];
        this._scale.range(range);
    }
}

export {ScaleX};
