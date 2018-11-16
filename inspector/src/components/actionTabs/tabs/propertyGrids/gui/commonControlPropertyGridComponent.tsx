import * as React from "react";
import { Observable } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { LineContainerComponent } from "../../../lineContainerComponent";
import { TextLineComponent } from "../../../lines/textLineComponent";
import { Control } from "babylonjs-gui/2D/controls/control";
import { SliderLineComponent } from "../../../lines/sliderLineComponent";
import { FloatLineComponent } from "../../../lines/floatLineComponent";
import { TextInputLineComponent } from "../../../lines/textInputLineComponent";
import { LockObject } from "../lockObject";

interface ICommonControlPropertyGridComponentProps {
    control: Control;
    lockObject: LockObject;
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>;
}

export class CommonControlPropertyGridComponent extends React.Component<ICommonControlPropertyGridComponentProps> {
    constructor(props: ICommonControlPropertyGridComponentProps) {
        super(props);
    }

    render() {
        const control = this.props.control;

        return (
            <div>
                <LineContainerComponent title="GENERAL">
                    <TextLineComponent label="Class" value={control.getClassName()} />
                    <SliderLineComponent label="Alpha" target={control} propertyName="alpha" minimum={0} maximum={1} step={0.01} onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Color" target={control} propertyName="color" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Background" target={control} propertyName="background" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="POSITION">
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Left" target={control} propertyName="left" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Top" target={control} propertyName="top" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Width" target={control} propertyName="width" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Height" target={control} propertyName="height" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Padding left" target={control} propertyName="paddingLeft" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Padding top" target={control} propertyName="paddingTop" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Padding right" target={control} propertyName="paddingRight" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Padding bottom" target={control} propertyName="paddingBottom" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="TRANSFORMATION" closed={true}>
                    <FloatLineComponent lockObject={this.props.lockObject} label="ScaleX" target={control} propertyName="scaleX" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent lockObject={this.props.lockObject} label="ScaleY" target={control} propertyName="scaleY" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <SliderLineComponent label="Rotation" target={control} propertyName="rotation" minimum={0} maximum={2 * Math.PI} step={0.01} onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent lockObject={this.props.lockObject} label="Transform center X" target={control} propertyName="transformCenterX" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent lockObject={this.props.lockObject} label="Transform center Y" target={control} propertyName="transformCenterY" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="FONT" closed={true}>
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Family" target={control} propertyName="fontFamily" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Size" target={control} propertyName="fontSize" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Weight" target={control} propertyName="fontWeight" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <TextInputLineComponent lockObject={this.props.lockObject} label="Style" target={control} propertyName="fontStyle" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
            </div>
        );
    }
}