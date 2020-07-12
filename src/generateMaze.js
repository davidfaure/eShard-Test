import { Amazer, AmazerBuilder, RandomizedPrim } from "amazer"

export default function generateMaze({ width, height}) {
  const config = new AmazerBuilder()
    .withSize({ width: width, height: height })
    .using(RandomizedPrim)
    .build()

  const maze = new Amazer(config).generate()

  const entrance = { isEntrance: true };
  maze.tiles[0][0] = Object.assign({}, maze.tiles[0][0], entrance);

  return maze;
}
