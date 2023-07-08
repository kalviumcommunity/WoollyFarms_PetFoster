import { Avatar, Grid } from "@nextui-org/react";

export default function Ava() {
  //   const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];
  return (
    <Grid.Container gap={1}>
      <Avatar.Group count={12}>
        {pictureUsers.map((url, index) => (
          <Avatar
            key={index}
            size="xl"
            pointer
            src={url}
            bordered
            color="gradient"
            stacked
          />
        ))}
      </Avatar.Group>
    </Grid.Container>
  );
}
