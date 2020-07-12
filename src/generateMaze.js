import { Amazer, AmazerBuilder, RandomizedPrim } from "amazer"

export default function generateMaze({ width, height}) {
  const config = new AmazerBuilder()
    .withSize({ width: width, height: height })
    .using(RandomizedPrim)
    .build()

  return new Amazer(config).generate()
}
