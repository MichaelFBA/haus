import d3 from './D3-custom.js';

export function InteractiveBg(element) {

    const width = document.getElementById(element).clientWidth;
    const height = document.getElementById(element).clientHeight;

    const svg = d3.select('#' + element).append("svg").attr("width", width).attr("height", height).attr("style", "position:absolute");
    const noOfBalls = 20;
    let nodeData = [];

    for(let i = 0; i < noOfBalls; i++){
        nodeData.push({
            'x': randomNumber(0, width),
            'y': randomNumber(0, height),
            'r': randomNumber(10,70)
        })
    }

    const attractForce = d3.forceManyBody().strength(580).distanceMax(400).distanceMin(1);
    const collisionForce = d3.forceCollide().radius(function(d) { return d.r + 0.5; }).strength(1).iterations(100);

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
        // node.attr("cx", d => d.x)
        //     .attr("cy", d => d.y)

        node.attr("cx", function(d) { return d.x = Math.max(d.r, Math.min(width - d.r, d.x)); })
            .attr("cy", function(d) { return d.y = Math.max(d.r, Math.min(height - d.r, d.y)); });
    }

    simulation.on("tick", ticked);

}
