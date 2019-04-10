

const updateDimensions = (
  svg, height, width, margin
) => {

  svg.attr('height', height).attr('width', width)

  const chartWidth = width - margin.left - margin.right,
        chartHeight =  height - margin.top - margin.bottom

  return { chartWidth, chartHeight }

},

appendArea = (
  area,
  className,
  left,
  top
) => {
  area.append('g')
    .attr('class', className)
    .attr('transform', `translate(${left}, ${top})`)
},
appendxAxisText = (
  area, xScale, year, up, down
) => {

  area.append('line')
      .attr('stroke', '#cccccc')
      .attr('x1', xScale(year))
      .attr('x2', xScale(year))
      .attr('y1', up)
      .attr('y2', down)
      .attr('opacity', 0.5)

  area.append('text')
      .attr('class', 'axis-text')
      .attr('x', xScale(year))
      .attr('y', down + 13)
      .attr('text-anchor', 'middle')
      .text(year)
},
appendyAxisText = (
  area, xScale, yScale, year, percentage, text
) => {
  area.append('text')
        .attr('class', 'axis-text')
        .attr('x', xScale(year) - 10)
        .attr('y', yScale(percentage) + 5)
        .text(text)
        .attr('text-anchor', 'end')

  area.append('line')
      .attr('stroke', '#cccccc')
      .attr('x1', xScale(year) - 8)
      .attr('x2', xScale(year))
      .attr('y1', yScale(percentage))
      .attr('y2', yScale(percentage))
      .attr('opacity', 0.5)
}

export { updateDimensions, appendArea, appendxAxisText, appendyAxisText }
