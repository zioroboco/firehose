import * as React from "react"

type Props = { happy: string; sad: string }
type State = { happy: boolean }

class StatefulExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { happy: false }
  }
  render(): JSX.Element {
    return (
      <div
        style={{ fontSize: "4rem" }}
        onClick={() => this.setState({ happy: !this.state.happy })}
      >
        {this.state.happy ? this.props.happy : this.props.sad}
      </div>
    )
  }
}

export default StatefulExample
