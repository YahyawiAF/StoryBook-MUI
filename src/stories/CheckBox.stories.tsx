import { ComponentStory, ComponentMeta } from "@storybook/react"
import CheckBox from "../components/CheckBox"

export default {
  component: CheckBox
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />

export const Default = Template.bind({})
export const Checked = Template.bind({})

Default.args = {
  label: "Flood zone 3",
  checked: false
}
Checked.args = {
  label: "Flood zone 3",
  checked: true
}
