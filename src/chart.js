import {
  HEIGHT,
  MARGINS,
  WIDTH,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
  CITIES
} from './constants'

class Chart {
  constructor(selector, options) {
    this.setChart(selector, options)
    this.setData()
  }

  setChart(selector, options = { topOffset: 0, leftOffset: 0 }) {
    const svg = d3.select(selector)
      .attr('height', HEIGHT + MARGINS * 2)
      .attr('width', WIDTH + MARGINS * 2)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS + options.leftOffset}, ${MARGINS / 2 + options.topOffset})`)
  }

  setData() {
    this.data = CITIES
  }

  xAxis(domain, xScale, ticks = 5) {
    this.xScale = d3[xScale]()
      .domain(domain)
      .range([0, WIDTH])
      
    this.chart
      .append('g')
      .call(d3.axisBottom(this.xScale).ticks(ticks))
      .attr('transform', `translate(0, ${HEIGHT})`)
  }

  yAxis(domain, yScale, ticks = 5) {
    this.yScale = d3[yScale]()
      .domain(domain)
      .range([0, WIDTH])

    this.chart
      .append('g')
      .call(d3.axisLeft(this.yScale).ticks(ticks))
  }

  gridLines(scale, position, ticks = 5) {
    this.chart.append('g')
      .attr('class', 'grid')
      .call(d3[position]()
        .scale(scale)
        .tickSize(WIDTH, 0, 0)
        .tickFormat('')
        .ticks(ticks))
  }

  rectangleLabels(text) {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .attr('class', d => `city ${d.class}`)
      .attr('y', (d, i) => i * 19.9 + 14)
      .style('fill', '#fff')
      .text((d, i) => {
        if (typeof text === 'string') {
          return d[text]
        } else {
          return text.call(d, i)
        }
      })
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('x', 5)
  }

  labelTop(text) {
    this.chart
      .append('text')
      .attr('class', 'label-text')
      .attr('text-anchor', 'middle')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .text(text)
  }
}

export default Chart