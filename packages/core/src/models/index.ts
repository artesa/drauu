import { Emitter } from 'nanoevents'
import type { Drauu } from '../drauu'
import type { DrawingMode, EventsMap } from '../types'

import { DrawModel } from './draw'
import { EllipseModel } from './ellipse'
import { EraserModel } from './eraser'
import { LineModel } from './line'
import { RectModel } from './rect'
import { StylusModel } from './stylus'

export function createModels(drauu: Drauu, emitter: Emitter<EventsMap>): Record<DrawingMode, DrawModel | StylusModel | LineModel | RectModel | EllipseModel | EraserModel> {
  return {
    draw: new DrawModel(drauu, emitter),
    stylus: new StylusModel(drauu, emitter),
    line: new LineModel(drauu, emitter),
    rectangle: new RectModel(drauu, emitter),
    ellipse: new EllipseModel(drauu, emitter),
    eraseLine: new EraserModel(drauu, emitter),
  }
}

export { DrawModel, EllipseModel, EraserModel, LineModel, RectModel, StylusModel }
