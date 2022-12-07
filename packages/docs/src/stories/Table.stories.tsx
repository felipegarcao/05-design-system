import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@upp-design-system/react";

export default {
  title: "Form/Table",
  component: Table,
  args: {
    children: [
      <>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
            <td>Descrição</td>
            <td>Opções</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Descrição</td>
            <td>Opções</td>
          </tr>
        </tbody>
      </>,
    ],
  },
  argsTypes: {},
} as Meta;

export const Primary: StoryObj = {};
