import { IField } from "./IField";
import { IParent } from "./IParent";

export interface IFieldProps {
  field: IField;
  ancestors?: IParent[];
}
