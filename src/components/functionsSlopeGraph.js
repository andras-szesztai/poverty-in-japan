import { nest } from "d3-collection";

const dataBind = (
 area, data, year
) => {

  const circles = area.selectAll('.prefecture-circle').data(data),
        lineData = nest().key(d => d.Prefecture).entries(data.filter(d => d.Year >= year)),
        lines = area.selectAll('.prefecture-line').data(lineData)

  return { circles, lines }

},
enterUpdateCircles = (
  circles, xScale, yScale, transition, duration, delay
) => {

  circles.enter()
        .append('circle')
        .attr('class', 'prefecture-circle')
        .attr('cx',d => xScale(d.Year))
        .attr('cy',d => yScale(d["Poverty rate"]))
        .attr('r', 0)
        .attr('fill', '#333333')
            .merge(circles)
            .transition(transition)
            .duration(duration)
            .delay(delay)
            .attr('r', 5)

},
enterUpdateLines = (
  area, lines, color, linePath, transition, duration
) => {

  lines.enter()
        .append('path')
        .attr('class', (d,i) => `prefecture-line${i}`)
        .attr('stroke', color)
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 1)
        .attr('fill', 'none')
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr('d', d => linePath(d.values))
          .lower()

  for( let i = 0; i < 47; i++){

    const totalLength = (area.select(`.prefecture-line${i}`).node().getTotalLength())

    area.select(`.prefecture-line${i}`).attr("stroke-dasharray", totalLength + " " + totalLength)
					  .attr("stroke-dashoffset", totalLength)
					  .transition(transition)
					  .duration(duration)
					  .attr("stroke-dashoffset", 0)
					  .style("stroke-width", 1)

  }




}


export { dataBind, enterUpdateCircles, enterUpdateLines }
