import { PrevNextTypeEnum, PrevNextLabelEnum } from "../enums/prev-next.enum";

export interface PrevNextButton {
    url : string,
    label : PrevNextLabelEnum,
    type : PrevNextTypeEnum
}