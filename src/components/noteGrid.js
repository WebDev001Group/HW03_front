import { Card, List } from "antd";
import { Note } from "./note";
const data = [
    {
      title: 'Basic',
      content: [
        {
          price: '£29.99',
          space: '1 GB of space',
          user: '1 user',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Premium',
      content: [
        {
          price: '£59.99',
          space: '5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space 5 GB of space5 GB of space',
          user: '5 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '£99.99',
          space: 'Unlimited space',
          user: '15 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '£99.99',
          space: 'Unlimited space',
          user: '15 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    },
    {
      title: 'Enterprise',
      content: [
        {
          price: '£99.99',
          space: 'Unlimited space',
          user: '15 users',
          support: '24/7 support',
          backup: 'Safe, reliable backup',
          access: 'Access from anywhere'
        }
      ]
    }
  ];
export const NoteGrid = () => {
  return (
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Note title={item.title} description={item.content[0].space} src={"https://joeschmoe.io/api/v1/random"}/>
      </List.Item>
    )}
  />
  );
};
