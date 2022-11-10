import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "../components/Card"
import Cover from "./assets/CardMedia.png"
export default {
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
export const Hover = Template.bind({})
export const Clicked = Template.bind({})
Hover.parameters = { pseudo: { hover: true } }

Default.args = {
  label: "Flood zone 3",
  img: Cover,
  checked: false
}
Hover.args = {
  label: "Flood zone 3",
  img: Cover,
  checked: false
}
Clicked.args = {
  label: "Flood zone 3",
  img: Cover,
  checked: true
}
