import d3 from './D3-custom.js';

export function InteractiveHeader(element) {
    const container = document.getElementById(element);
    if(!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = window.innerWidth <= 415;
    const svg = d3.select('#' + element).insert("svg").attr("width", width).attr("height", height).attr("style", "position:absolute");
    const noOfBalls = isMobile ? 10  : 25;
    const sizeOfLargeCircles = isMobile ? 40  : 70;

    let nodeData = [];
    nodeData.push({ 'x': width / 2, 'y': height / 2, 'r': sizeOfLargeCircles })

    for(let i = 1; i < noOfBalls; i++){
        nodeData.push({
            'x': randomNumber(width / 3, width),
            'y': randomNumber(0, height),
            'r': randomNumber(10,sizeOfLargeCircles)
        })
    }

    const attractForce = d3.forceManyBody().strength(100).distanceMax(1000).distanceMin(1);
    const collisionForce = d3.forceCollide().radius(function(d) { return d.r + 2; }).strength(1).iterations(100);

    const simulation = d3.forceSimulation(nodeData).alphaDecay(0.01).force("attractForce", attractForce).force("collisionForce", collisionForce);

    const node = svg.selectAll("circle").data(nodeData)
        .enter().append("circle")
        .attr("r", d => d.r).attr("cx", d => d.x).attr("cy", d => d.y)
        .attr("fill", "black").attr("opacity", 0.5)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    function dragstarted(d) {
        simulation.restart();
        simulation.alpha(0.7);
        d.fx = d.x;
        d.fy = d.y;
    }

    function randomNumber(start, end){
        return Math.floor(Math.random() * end) + start;
    }

    function dragged(d) {
        var mouesPos = d3.mouse(this);
        d.fx = mouesPos[0];
        d.fy = mouesPos[1];
    }

    function dragended(d) {
        d.fx = null;
        d.fy = null;
        simulation.alphaTarget(0.1);
    }

    function ticked() {
        node.attr("cx", function(d) { return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); })
            .attr("cy", function(d) { return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); });
    }

    simulation.on("tick", ticked);

}
