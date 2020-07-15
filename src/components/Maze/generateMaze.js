import { Amazer, AmazerBuilder, RandomizedPrim } from "amazer"

export default function generateMaze({ width, height}) {
  const config = new AmazerBuilder()
    .withSize({ width: width, height: height })
    .using(RandomizedPrim)
    .build()

  const maze = new Amazer(config).generate()

  const entrance = { isEntrance: true };
  const exit = { isExit: true};

  //set entrance
  maze.tiles[0][0] = Object.assign({}, maze.tiles[0][0], entrance);

  //function to set exit 
  const area = maze.tiles;
  const rightColumn = area.length -2;
  const rightColumnData = area[rightColumn].map(element => element)

  const getRightColumn = (area) => {
    let indexColumn = area.length - 2;
    let index = getFloorTile(rightColumnData)
    while (index === -1) {
      indexColumn = indexColumn - 1
      index = getFloorTile(rightColumnData)
    }
    return [indexColumn, index]
  }

  const getFloorTile = (rightColumnData) => {
    let index = rightColumnData.length - 1
    while (rightColumnData[index] && rightColumnData[index].name !== "Floor") {
      index = index -1
    }
    return index;
  }

   //Set exit 
  const [indexColumn, index] = getRightColumn(area);
  area[indexColumn][index] = Object.assign({},area[indexColumn][index], exit)

  return maze;
}
