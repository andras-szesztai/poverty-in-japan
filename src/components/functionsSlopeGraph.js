import { nest } from "d3-collection";

const dataBind = (
 area, data
) => {

  const circles = area.selectAll('.prefecture-circle').data(data),
        lineData = nest().key(d => d.Prefecture).entries(data),
        lines = area.selectAll('.prefecture-line').data(lineData)

  return { circles, lines }

}


export { dataBind }
