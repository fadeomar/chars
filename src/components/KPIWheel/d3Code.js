import { select } from "d3";
const d3KPIWheel = (data) => {
  console.log({ data });
  const selection = select(".KPIWheel");
  const everything = selection.selectAll("*");
  everything.remove();
  const container = selection
    .append("svg")
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("width", "658")
    .attr("height", "658")
    .attr("viewBox", "0 0 658 658")
    .attr("fill", "none");
  const shapes = container.append("g").attr("filter", "url(#filter0_d_32_931)");
  shapes
    .append("path")
    .attr(
      "d",
      "M99.1903 95.1903C58.8507 135.53 29.8402 185.777 15.0746 240.882C0.308937 295.987 0.308472 354.008 15.0732 409.113C29.838 464.218 58.8477 514.466 99.1867 554.806C139.526 595.146 189.773 624.158 244.877 638.924L329 325L99.1903 95.1903Z"
    )
    .attr("fill", "#206F76");
  shapes
    .append("path")
    .attr(
      "d",
      "M244.884 638.926C299.989 653.691 358.009 653.691 413.115 638.926C468.22 624.161 518.467 595.151 558.807 554.812C599.147 514.473 628.158 464.226 642.925 409.121C657.691 354.016 657.692 295.996 642.928 240.89L329 325L244.884 638.926Z"
    )
    .attr("fill", "#184957");
  shapes
    .append("path")
    .attr(
      "d",
      "M642.926 240.884C628.161 185.779 599.15 135.531 558.811 95.1915C518.472 54.8517 468.224 25.8409 413.119 11.075C358.015 -3.69092 299.994 -3.69168 244.889 11.0728C189.784 25.8373 139.536 54.8468 99.1951 95.1856L329 325L642.926 240.884Z"
    )
    .attr("fill", "#052F48");
  shapes
    .append("path")
    .attr(
      "d",
      "M615.267 248.295C601.802 198.044 575.347 152.222 538.56 115.436C501.773 78.6495 455.951 52.195 405.699 38.7312L329 325L615.267 248.295Z"
    )
    .attr("fill", "#6391A8");
  shapes
    .append("path")
    .attr(
      "d",
      "M405.705 38.7328C355.454 25.2679 302.543 25.2682 252.292 38.7335C202.041 52.1989 156.219 78.6548 119.433 115.442L329 325L405.705 38.7328Z"
    )
    .attr("fill", "#3B6B6F");
  shapes
    .append("path")
    .attr(
      "d",
      "M119.438 115.438C82.6512 152.224 56.1962 198.046 42.7319 248.298C29.2676 298.549 29.2684 351.46 42.7343 401.711L329 325L119.438 115.438Z"
    )
    .attr("fill", "#5E8F93");
  shapes
    .append("path")
    .attr(
      "d",
      "M42.7327 401.705C56.1975 451.956 82.653 497.778 119.44 534.564C156.227 571.35 202.049 597.805 252.301 611.269L329 325L42.7327 401.705Z"
    )
    .attr("fill", "#365F75");
  shapes
    .append("path")
    .attr(
      "d",
      "M252.295 611.267C302.546 624.732 355.457 624.732 405.708 611.266C455.959 597.801 501.781 571.345 538.566 534.558L329 325L252.295 611.267Z"
    )
    .attr("fill", "#A3B7B8");
  shapes
    .append("path")
    .attr(
      "d",
      "M538.562 534.562C575.349 497.776 601.804 451.954 615.268 401.702C628.732 351.45 628.731 298.54 615.266 248.289L329 325L538.562 534.562Z"
    )
    .attr("fill", "#005D77");
  shapes
    .append("path")
    .attr(
      "d",
      "M587.609 255.706C575.45 210.329 551.566 168.95 518.354 135.725L329 325L587.609 255.706Z"
    )
    .attr("fill", "#A96A34");
  shapes
    .append("path")
    .attr(
      "d",
      "M518.315 135.685C485.096 102.467 443.723 78.5742 398.348 66.406L329 325L518.315 135.685Z"
    )
    .attr("fill", "#235E80");
  shapes
    .append("path")
    .attr(
      "d",
      "M398.294 66.3915C352.917 54.2328 305.14 54.2277 259.76 66.377L329 325L398.294 66.3915Z"
    )
    .attr("fill", "#B36B6C");
  shapes
    .append("path")
    .attr(
      "d",
      "M259.706 66.3915C214.329 78.5502 172.95 102.435 139.725 135.646L329 325L259.706 66.3915Z"
    )
    .attr("fill", "#235E80");
  shapes
    .append("path")
    .attr(
      "d",
      "M139.686 135.685C106.467 168.904 82.5742 210.278 70.406 255.652L329 325L139.686 135.685Z"
    )
    .attr("fill", "#C8B9A4");
  shapes
    .append("path")
    .attr(
      "d",
      "M70.3915 255.706C58.2328 301.083 58.2278 348.86 70.377 394.24L329 325L70.3915 255.706Z"
    )
    .attr("fill", "#DE9E9C");
  shapes
    .append("path")
    .attr(
      "d",
      "M70.3915 394.294C82.5502 439.671 106.435 481.05 139.646 514.275L329 325L70.3915 394.294Z"
    )
    .attr("fill", "#A96A34");
  shapes
    .append("path")
    .attr(
      "d",
      "M139.685 514.315C172.904 547.533 214.278 571.426 259.652 583.594L329 325L139.685 514.315Z"
    )
    .attr("fill", "#042E46");
  shapes
    .append("path")
    .attr(
      "d",
      "M259.706 583.609C305.083 595.767 352.86 595.772 398.24 583.623L329 325L259.706 583.609Z"
    )
    .attr("fill", "#C8B9A4");
  shapes
    .append("path")
    .attr(
      "d",
      "M398.294 583.609C443.671 571.45 485.05 547.565 518.275 514.354L329 325L398.294 583.609Z"
    )
    .attr("fill", "#B36B6C");
  shapes
    .append("path")
    .attr(
      "d",
      "M518.315 514.315C551.533 481.096 575.426 439.722 587.594 394.348L329 325L518.315 514.315Z"
    )
    .attr("fill", "#042E46");
  shapes
    .append("path")
    .attr(
      "d",
      "M587.609 394.294C599.767 348.917 599.772 301.14 587.623 255.76L329 325L587.609 394.294Z"
    )
    .attr("fill", "#DE9E9C");
  shapes
    .append("circle")
    .attr("cx", "330.432")
    .attr("cy", "327.863")
    .attr("r", "239.097")
    .attr("fill", "white");
  shapes
    .append("line")
    .attr("x1", "270.55")
    .attr("y1", "322.137")
    .attr("x2", "270.55")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "256.232")
    .attr("y1", "322.137")
    .attr("x2", "256.232")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "241.915")
    .attr("y1", "322.137")
    .attr("x2", "241.915")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "227.598")
    .attr("y1", "322.137")
    .attr("x2", "227.598")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "213.281")
    .attr("y1", "322.137")
    .attr("x2", "213.281")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "198.964")
    .attr("y1", "322.137")
    .attr("x2", "198.964")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "184.646")
    .attr("y1", "322.137")
    .attr("x2", "184.646")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "170.329")
    .attr("y1", "322.137")
    .attr("x2", "170.329")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "156.012")
    .attr("y1", "322.137")
    .attr("x2", "156.012")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "141.695")
    .attr("y1", "322.137")
    .attr("x2", "141.695")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "127.378")
    .attr("y1", "322.137")
    .attr("x2", "127.378")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "113.061")
    .attr("y1", "322.137")
    .attr("x2", "113.061")
    .attr("y2", "326.432")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("circle")
    .attr("cx", "264.573")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "250.256")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "235.938")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "221.621")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "207.304")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "192.987")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "178.67")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "164.352")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "150.035")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "135.718")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "121.401")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "107.084")
    .attr("cy", "324.284")
    .attr("r", "1.43172")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "382.539")
    .attr("y1", "296.638")
    .attr("x2", "380.391")
    .attr("y2", "292.918")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "394.938")
    .attr("y1", "289.478")
    .attr("x2", "392.79")
    .attr("y2", "285.759")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "407.336")
    .attr("y1", "282.319")
    .attr("x2", "405.189")
    .attr("y2", "278.6")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "419.735")
    .attr("y1", "275.16")
    .attr("x2", "417.587")
    .attr("y2", "271.44")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "432.134")
    .attr("y1", "268.001")
    .attr("x2", "429.986")
    .attr("y2", "264.281")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "444.533")
    .attr("y1", "260.842")
    .attr("x2", "442.385")
    .attr("y2", "257.122")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "456.931")
    .attr("y1", "253.682")
    .attr("x2", "454.783")
    .attr("y2", "249.963")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "469.33")
    .attr("y1", "246.523")
    .attr("x2", "467.182")
    .attr("y2", "242.804")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "481.729")
    .attr("y1", "239.364")
    .attr("x2", "479.581")
    .attr("y2", "235.644")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "494.127")
    .attr("y1", "232.205")
    .attr("x2", "491.979")
    .attr("y2", "228.485")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "506.526")
    .attr("y1", "225.046")
    .attr("x2", "504.378")
    .attr("y2", "221.326")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "518.924")
    .attr("y1", "217.886")
    .attr("x2", "516.777")
    .attr("y2", "214.167")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "386.641")
    .attr("cy", "291.789")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 386.641 291.789)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "399.04")
    .attr("cy", "284.63")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 399.04 284.63)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "411.439")
    .attr("cy", "277.471")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 411.439 277.471)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "423.837")
    .attr("cy", "270.312")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 423.837 270.312)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "436.236")
    .attr("cy", "263.152")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 436.236 263.152)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "448.635")
    .attr("cy", "255.993")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 448.635 255.993)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "461.033")
    .attr("cy", "248.834")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 461.033 248.834)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "473.432")
    .attr("cy", "241.675")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 473.432 241.675)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "485.831")
    .attr("cy", "234.516")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 485.831 234.516)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "498.229")
    .attr("cy", "227.356")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 498.229 227.356)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "510.628")
    .attr("cy", "220.197")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 510.628 220.197)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "523.027")
    .attr("cy", "213.038")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(149.997 523.027 213.038)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "388.166")
    .attr("y1", "326.429")
    .attr("x2", "388.205")
    .attr("y2", "322.134")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "402.483")
    .attr("y1", "326.557")
    .attr("x2", "402.521")
    .attr("y2", "322.262")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "416.8")
    .attr("y1", "326.685")
    .attr("x2", "416.838")
    .attr("y2", "322.39")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "431.116")
    .attr("y1", "326.812")
    .attr("x2", "431.155")
    .attr("y2", "322.517")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "445.433")
    .attr("y1", "326.94")
    .attr("x2", "445.471")
    .attr("y2", "322.645")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "459.749")
    .attr("y1", "327.067")
    .attr("x2", "459.787")
    .attr("y2", "322.773")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "474.066")
    .attr("y1", "327.195")
    .attr("x2", "474.104")
    .attr("y2", "322.9")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "488.382")
    .attr("y1", "327.323")
    .attr("x2", "488.421")
    .attr("y2", "323.028")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "502.699")
    .attr("y1", "327.45")
    .attr("x2", "502.737")
    .attr("y2", "323.156")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "517.016")
    .attr("y1", "327.578")
    .attr("x2", "517.054")
    .attr("y2", "323.283")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "531.332")
    .attr("y1", "327.706")
    .attr("x2", "531.371")
    .attr("y2", "323.411")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "545.649")
    .attr("y1", "327.833")
    .attr("x2", "545.687")
    .attr("y2", "323.538")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("circle")
    .attr("cx", "394.162")
    .attr("cy", "324.335")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 394.162 324.335)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "408.479")
    .attr("cy", "324.463")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 408.479 324.463)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "422.795")
    .attr("cy", "324.59")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 422.795 324.59)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "437.112")
    .attr("cy", "324.718")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 437.112 324.718)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "451.429")
    .attr("cy", "324.846")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 451.429 324.846)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "465.745")
    .attr("cy", "324.973")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 465.745 324.973)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "480.062")
    .attr("cy", "325.101")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 480.062 325.101)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "494.378")
    .attr("cy", "325.229")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 494.378 325.229)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "508.695")
    .attr("cy", "325.356")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 508.695 325.356)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "523.012")
    .attr("cy", "325.484")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 523.012 325.484)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "537.328")
    .attr("cy", "325.611")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 537.328 325.611)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "551.645")
    .attr("cy", "325.739")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-179.489 551.645 325.739)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "379.541")
    .attr("y1", "356.447")
    .attr("x2", "381.688")
    .attr("y2", "352.727")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "391.94")
    .attr("y1", "363.605")
    .attr("x2", "394.088")
    .attr("y2", "359.885")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "404.34")
    .attr("y1", "370.763")
    .attr("x2", "406.487")
    .attr("y2", "367.043")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "416.739")
    .attr("y1", "377.921")
    .attr("x2", "418.887")
    .attr("y2", "374.201")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "429.139")
    .attr("y1", "385.079")
    .attr("x2", "431.286")
    .attr("y2", "381.359")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "441.538")
    .attr("y1", "392.236")
    .attr("x2", "443.685")
    .attr("y2", "388.517")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "453.937")
    .attr("y1", "399.394")
    .attr("x2", "456.085")
    .attr("y2", "395.675")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "466.337")
    .attr("y1", "406.552")
    .attr("x2", "468.484")
    .attr("y2", "402.833")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "478.736")
    .attr("y1", "413.71")
    .attr("x2", "480.884")
    .attr("y2", "409.991")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "491.136")
    .attr("y1", "420.868")
    .attr("x2", "493.283")
    .attr("y2", "417.149")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "503.535")
    .attr("y1", "428.026")
    .attr("x2", "505.682")
    .attr("y2", "424.307")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "515.934")
    .attr("y1", "435.184")
    .attr("x2", "518.082")
    .attr("y2", "431.464")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "385.791")
    .attr("cy", "357.575")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 385.791 357.575)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "398.19")
    .attr("cy", "364.733")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 398.19 364.733)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "410.59")
    .attr("cy", "371.891")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 410.59 371.891)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "422.989")
    .attr("cy", "379.049")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 422.989 379.049)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "435.388")
    .attr("cy", "386.207")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 435.388 386.207)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "447.788")
    .attr("cy", "393.365")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 447.788 393.365)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "460.187")
    .attr("cy", "400.523")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 460.187 400.523)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "472.587")
    .attr("cy", "407.681")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 472.587 407.681)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "484.986")
    .attr("cy", "414.839")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 484.986 414.839)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "497.386")
    .attr("cy", "421.997")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 497.386 421.997)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "509.785")
    .attr("cy", "429.155")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 509.785 429.155)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "522.184")
    .attr("cy", "436.313")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-150.003 522.184 436.313)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "357.178")
    .attr("y1", "375.704")
    .attr("x2", "360.889")
    .attr("y2", "373.543")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "364.382")
    .attr("y1", "388.076")
    .attr("x2", "368.094")
    .attr("y2", "385.915")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "371.587")
    .attr("y1", "400.449")
    .attr("x2", "375.299")
    .attr("y2", "398.287")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "378.792")
    .attr("y1", "412.821")
    .attr("x2", "382.503")
    .attr("y2", "410.66")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "385.996")
    .attr("y1", "425.193")
    .attr("x2", "389.708")
    .attr("y2", "423.032")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "393.201")
    .attr("y1", "437.566")
    .attr("x2", "396.913")
    .attr("y2", "435.404")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "400.405")
    .attr("y1", "449.938")
    .attr("x2", "404.117")
    .attr("y2", "447.777")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "407.61")
    .attr("y1", "462.31")
    .attr("x2", "411.322")
    .attr("y2", "460.149")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "414.815")
    .attr("y1", "474.683")
    .attr("x2", "418.526")
    .attr("y2", "472.521")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "422.019")
    .attr("y1", "487.055")
    .attr("x2", "425.731")
    .attr("y2", "484.894")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "429.224")
    .attr("y1", "499.427")
    .attr("x2", "432.936")
    .attr("y2", "497.266")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "436.429")
    .attr("y1", "511.8")
    .attr("x2", "440.14")
    .attr("y2", "509.638")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "362.041")
    .attr("cy", "379.788")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 362.041 379.788)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "369.246")
    .attr("cy", "392.161")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 369.246 392.161)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "376.45")
    .attr("cy", "404.533")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 376.45 404.533)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "383.655")
    .attr("cy", "416.905")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 383.655 416.905)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "390.86")
    .attr("cy", "429.278")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 390.86 429.278)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "398.064")
    .attr("cy", "441.65")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 398.064 441.65)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "405.269")
    .attr("cy", "454.022")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 405.269 454.022)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "412.474")
    .attr("cy", "466.395")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 412.474 466.395)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "419.678")
    .attr("cy", "478.767")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 419.678 478.767)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "426.883")
    .attr("cy", "491.139")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 426.883 491.139)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "434.088")
    .attr("cy", "503.512")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 434.088 503.512)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "441.292")
    .attr("cy", "515.884")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-120.213 441.292 515.884)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "327.032")
    .attr("y1", "383.473")
    .attr("x2", "331.327")
    .attr("y2", "383.479")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "327.011")
    .attr("y1", "397.79")
    .attr("x2", "331.306")
    .attr("y2", "397.796")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.991")
    .attr("y1", "412.107")
    .attr("x2", "331.286")
    .attr("y2", "412.113")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.97")
    .attr("y1", "426.424")
    .attr("x2", "331.265")
    .attr("y2", "426.431")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.95")
    .attr("y1", "440.742")
    .attr("x2", "331.245")
    .attr("y2", "440.748")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.929")
    .attr("y1", "455.059")
    .attr("x2", "331.225")
    .attr("y2", "455.065")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.909")
    .attr("y1", "469.376")
    .attr("x2", "331.204")
    .attr("y2", "469.382")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.889")
    .attr("y1", "483.693")
    .attr("x2", "331.184")
    .attr("y2", "483.699")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.868")
    .attr("y1", "498.01")
    .attr("x2", "331.163")
    .attr("y2", "498.016")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.848")
    .attr("y1", "512.327")
    .attr("x2", "331.143")
    .attr("y2", "512.333")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.827")
    .attr("y1", "526.645")
    .attr("x2", "331.123")
    .attr("y2", "526.651")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "326.807")
    .attr("y1", "540.962")
    .attr("x2", "331.102")
    .attr("y2", "540.968")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "329.171")
    .attr("cy", "389.453")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.171 389.453)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.15")
    .attr("cy", "403.77")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.15 403.77)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.13")
    .attr("cy", "418.087")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.13 418.087)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.109")
    .attr("cy", "432.404")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.109 432.404)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.089")
    .attr("cy", "446.721")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.089 446.721)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.068")
    .attr("cy", "461.039")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.068 461.039)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.048")
    .attr("cy", "475.356")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.048 475.356)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.028")
    .attr("cy", "489.673")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.028 489.673)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.007")
    .attr("cy", "503.99")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 329.007 503.99)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.987")
    .attr("cy", "518.307")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 328.987 518.307)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.966")
    .attr("cy", "532.624")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 328.966 532.624)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.946")
    .attr("cy", "546.942")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(-89.9183 328.946 546.942)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "295.717")
    .attr("y1", "373.457")
    .attr("x2", "299.515")
    .attr("y2", "375.462")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "289.035")
    .attr("y1", "386.12")
    .attr("x2", "292.833")
    .attr("y2", "388.124")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "282.353")
    .attr("y1", "398.782")
    .attr("x2", "286.151")
    .attr("y2", "400.786")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "275.671")
    .attr("y1", "411.444")
    .attr("x2", "279.469")
    .attr("y2", "413.449")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "268.989")
    .attr("y1", "424.106")
    .attr("x2", "272.788")
    .attr("y2", "426.111")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "262.307")
    .attr("y1", "436.769")
    .attr("x2", "266.106")
    .attr("y2", "438.773")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "255.625")
    .attr("y1", "449.431")
    .attr("x2", "259.424")
    .attr("y2", "451.436")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "248.943")
    .attr("y1", "462.093")
    .attr("x2", "252.742")
    .attr("y2", "464.098")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "242.261")
    .attr("y1", "474.756")
    .attr("x2", "246.06")
    .attr("y2", "476.76")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "235.579")
    .attr("y1", "487.418")
    .attr("x2", "239.378")
    .attr("y2", "489.422")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "228.897")
    .attr("y1", "500.08")
    .attr("x2", "232.696")
    .attr("y2", "502.085")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "222.215")
    .attr("y1", "512.742")
    .attr("x2", "226.014")
    .attr("y2", "514.747")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("circle")
    .attr("cx", "294.826")
    .attr("cy", "379.746")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 294.826 379.746)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "288.145")
    .attr("cy", "392.408")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 288.145 392.408)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "281.463")
    .attr("cy", "405.07")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 281.463 405.07)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "274.781")
    .attr("cy", "417.732")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 274.781 417.732)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "268.099")
    .attr("cy", "430.395")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 268.099 430.395)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "261.417")
    .attr("cy", "443.057")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 261.417 443.057)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "254.735")
    .attr("cy", "455.719")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 254.735 455.719)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "248.053")
    .attr("cy", "468.382")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 248.053 468.382)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "241.371")
    .attr("cy", "481.044")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 241.371 481.044)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "234.689")
    .attr("cy", "493.706")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 234.689 493.706)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "228.007")
    .attr("cy", "506.368")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 228.007 506.368)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "221.325")
    .attr("cy", "519.031")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-62.1793 221.325 519.031)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "276.589")
    .attr("y1", "350.897")
    .attr("x2", "278.833")
    .attr("y2", "354.559")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "264.381")
    .attr("y1", "358.377")
    .attr("x2", "266.625")
    .attr("y2", "362.039")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "252.174")
    .attr("y1", "365.857")
    .attr("x2", "254.418")
    .attr("y2", "369.52")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "239.966")
    .attr("y1", "373.337")
    .attr("x2", "242.21")
    .attr("y2", "377")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "227.758")
    .attr("y1", "380.818")
    .attr("x2", "230.003")
    .attr("y2", "384.48")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "215.551")
    .attr("y1", "388.298")
    .attr("x2", "217.795")
    .attr("y2", "391.96")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "203.343")
    .attr("y1", "395.778")
    .attr("x2", "205.587")
    .attr("y2", "399.441")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "191.136")
    .attr("y1", "403.259")
    .attr("x2", "193.38")
    .attr("y2", "406.921")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "178.928")
    .attr("y1", "410.739")
    .attr("x2", "181.172")
    .attr("y2", "414.401")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "166.72")
    .attr("y1", "418.219")
    .attr("x2", "168.964")
    .attr("y2", "421.882")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "154.513")
    .attr("y1", "425.7")
    .attr("x2", "156.757")
    .attr("y2", "429.362")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "142.305")
    .attr("y1", "433.18")
    .attr("x2", "144.549")
    .attr("y2", "436.842")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("circle")
    .attr("cx", "272.615")
    .attr("cy", "355.85")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 272.615 355.85)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "260.407")
    .attr("cy", "363.331")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 260.407 363.331)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "248.2")
    .attr("cy", "370.811")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 248.2 370.811)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "235.992")
    .attr("cy", "378.291")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 235.992 378.291)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "223.784")
    .attr("cy", "385.772")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 223.784 385.772)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "211.577")
    .attr("cy", "393.252")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 211.577 393.252)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "199.369")
    .attr("cy", "400.732")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 199.369 400.732)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "187.161")
    .attr("cy", "408.213")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 187.161 408.213)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "174.954")
    .attr("cy", "415.693")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 174.954 415.693)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "162.746")
    .attr("cy", "423.173")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 162.746 423.173)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "150.538")
    .attr("cy", "430.653")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 150.538 430.653)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("circle")
    .attr("cx", "138.331")
    .attr("cy", "438.134")
    .attr("r", "1.43172")
    .attr("transform", "rotate(-31.4981 138.331 438.134)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "361.213")
    .attr("y1", "272.184")
    .attr("x2", "357.51")
    .attr("y2", "270.009")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "368.464")
    .attr("y1", "259.839")
    .attr("x2", "364.761")
    .attr("y2", "257.664")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "375.716")
    .attr("y1", "247.494")
    .attr("x2", "372.012")
    .attr("y2", "245.319")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "382.967")
    .attr("y1", "235.149")
    .attr("x2", "379.263")
    .attr("y2", "232.974")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "390.218")
    .attr("y1", "222.804")
    .attr("x2", "386.515")
    .attr("y2", "220.629")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "397.469")
    .attr("y1", "210.459")
    .attr("x2", "393.766")
    .attr("y2", "208.284")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "404.721")
    .attr("y1", "198.114")
    .attr("x2", "401.017")
    .attr("y2", "195.938")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "411.972")
    .attr("y1", "185.769")
    .attr("x2", "408.268")
    .attr("y2", "183.593")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "419.223")
    .attr("y1", "173.424")
    .attr("x2", "415.52")
    .attr("y2", "171.248")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "426.474")
    .attr("y1", "161.079")
    .attr("x2", "422.771")
    .attr("y2", "158.903")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "433.725")
    .attr("y1", "148.733")
    .attr("x2", "430.022")
    .attr("y2", "146.558")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "440.977")
    .attr("y1", "136.388")
    .attr("x2", "437.273")
    .attr("y2", "134.213")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "362.389")
    .attr("cy", "265.943")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 362.389 265.943)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "369.64")
    .attr("cy", "253.598")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 369.64 253.598)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "376.891")
    .attr("cy", "241.253")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 376.891 241.253)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "384.142")
    .attr("cy", "228.908")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 384.142 228.908)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "391.394")
    .attr("cy", "216.563")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 391.394 216.563)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "398.645")
    .attr("cy", "204.218")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 398.645 204.218)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "405.896")
    .attr("cy", "191.872")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 405.896 191.872)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "413.147")
    .attr("cy", "179.527")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 413.147 179.527)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "420.398")
    .attr("cy", "167.182")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 420.398 167.182)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "427.65")
    .attr("cy", "154.837")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 427.65 154.837)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "434.901")
    .attr("cy", "142.492")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 434.901 142.492)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "442.152")
    .attr("cy", "130.147")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(120.429 442.152 130.147)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "330.3")
    .attr("y1", "265.154")
    .attr("x2", "326.005")
    .attr("y2", "265.122")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.407")
    .attr("y1", "250.837")
    .attr("x2", "326.112")
    .attr("y2", "250.805")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.514")
    .attr("y1", "236.521")
    .attr("x2", "326.219")
    .attr("y2", "236.489")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.621")
    .attr("y1", "222.204")
    .attr("x2", "326.326")
    .attr("y2", "222.172")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.728")
    .attr("y1", "207.887")
    .attr("x2", "326.433")
    .attr("y2", "207.855")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.835")
    .attr("y1", "193.571")
    .attr("x2", "326.54")
    .attr("y2", "193.539")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "330.942")
    .attr("y1", "179.254")
    .attr("x2", "326.647")
    .attr("y2", "179.222")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "331.049")
    .attr("y1", "164.937")
    .attr("x2", "326.754")
    .attr("y2", "164.905")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "331.156")
    .attr("y1", "150.62")
    .attr("x2", "326.861")
    .attr("y2", "150.588")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "331.263")
    .attr("y1", "136.303")
    .attr("x2", "326.968")
    .attr("y2", "136.271")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "331.37")
    .attr("y1", "121.986")
    .attr("x2", "327.075")
    .attr("y2", "121.954")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "331.478")
    .attr("y1", "107.67")
    .attr("x2", "327.182")
    .attr("y2", "107.637")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "328.197")
    .attr("cy", "259.161")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.197 259.161)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.304")
    .attr("cy", "244.845")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.304 244.845)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.411")
    .attr("cy", "230.528")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.411 230.528)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.518")
    .attr("cy", "216.211")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.518 216.211)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.625")
    .attr("cy", "201.894")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.625 201.894)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.732")
    .attr("cy", "187.578")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.732 187.578)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.839")
    .attr("cy", "173.261")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.839 173.261)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "328.947")
    .attr("cy", "158.944")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 328.947 158.944)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.054")
    .attr("cy", "144.627")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 329.054 144.627)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.161")
    .attr("cy", "130.31")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 329.161 130.31)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "329.268")
    .attr("cy", "115.994")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(90.4285 329.268 115.994)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "1.43172")
    .attr("cy", "1.43172")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr(
      "transform",
      "matrix(-0.00749261 0.999972 -0.999972 -0.00746332 330.817 100.256)"
    )
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "301.635")
    .attr("y1", "272.103")
    .attr("x2", "297.908")
    .attr("y2", "274.238")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "294.517")
    .attr("y1", "259.681")
    .attr("x2", "290.79")
    .attr("y2", "261.816")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "287.399")
    .attr("y1", "247.258")
    .attr("x2", "283.672")
    .attr("y2", "249.394")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "280.281")
    .attr("y1", "234.836")
    .attr("x2", "276.554")
    .attr("y2", "236.972")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "273.163")
    .attr("y1", "222.414")
    .attr("x2", "269.436")
    .attr("y2", "224.549")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "266.044")
    .attr("y1", "209.991")
    .attr("x2", "262.318")
    .attr("y2", "212.127")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "258.926")
    .attr("y1", "197.569")
    .attr("x2", "255.2")
    .attr("y2", "199.705")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "251.808")
    .attr("y1", "185.147")
    .attr("x2", "248.081")
    .attr("y2", "187.282")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "244.69")
    .attr("y1", "172.724")
    .attr("x2", "240.963")
    .attr("y2", "174.86")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "237.572")
    .attr("y1", "160.302")
    .attr("x2", "233.845")
    .attr("y2", "162.438")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "230.454")
    .attr("y1", "147.88")
    .attr("x2", "226.727")
    .attr("y2", "150.015")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "223.336")
    .attr("y1", "135.458")
    .attr("x2", "219.609")
    .attr("y2", "137.593")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "296.8")
    .attr("cy", "267.985")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 296.8 267.985)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "289.682")
    .attr("cy", "255.563")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 289.682 255.563)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "282.564")
    .attr("cy", "243.14")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 282.564 243.14)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "275.446")
    .attr("cy", "230.718")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 275.446 230.718)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "268.327")
    .attr("cy", "218.296")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 268.327 218.296)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "261.21")
    .attr("cy", "205.873")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 261.21 205.873)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "254.092")
    .attr("cy", "193.451")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 254.092 193.451)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "246.973")
    .attr("cy", "181.029")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 246.973 181.029)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "239.855")
    .attr("cy", "168.606")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 239.855 168.606)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "232.737")
    .attr("cy", "156.184")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 232.737 156.184)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "225.619")
    .attr("cy", "143.762")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 225.619 143.762)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "218.501")
    .attr("cy", "131.339")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(60.1868 218.501 131.339)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("line")
    .attr("x1", "280.308")
    .attr("y1", "290.801")
    .attr("x2", "278.212")
    .attr("y2", "294.55")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "267.811")
    .attr("y1", "283.815")
    .attr("x2", "265.715")
    .attr("y2", "287.564")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "255.314")
    .attr("y1", "276.829")
    .attr("x2", "253.219")
    .attr("y2", "280.578")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "242.817")
    .attr("y1", "269.842")
    .attr("x2", "240.722")
    .attr("y2", "273.591")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "230.321")
    .attr("y1", "262.856")
    .attr("x2", "228.225")
    .attr("y2", "266.605")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "217.824")
    .attr("y1", "255.87")
    .attr("x2", "215.728")
    .attr("y2", "259.619")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "205.327")
    .attr("y1", "248.883")
    .attr("x2", "203.231")
    .attr("y2", "252.632")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "192.83")
    .attr("y1", "241.897")
    .attr("x2", "190.734")
    .attr("y2", "245.646")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "180.333")
    .attr("y1", "234.911")
    .attr("x2", "178.237")
    .attr("y2", "238.66")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "167.836")
    .attr("y1", "227.924")
    .attr("x2", "165.74")
    .attr("y2", "231.673")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "155.339")
    .attr("y1", "220.938")
    .attr("x2", "153.243")
    .attr("y2", "224.687")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("line")
    .attr("x1", "142.842")
    .attr("y1", "213.952")
    .attr("x2", "140.746")
    .attr("y2", "217.701")
    .attr("stroke", "#9A9A9A")
    .attr("stroke-opacity", "0.15")
    .attr("stroke-width", "0.5");
  shapes
    .append("ellipse")
    .attr("cx", "274.043")
    .attr("cy", "289.759")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 274.043 289.759)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "261.546")
    .attr("cy", "282.773")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 261.546 282.773)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "249.049")
    .attr("cy", "275.787")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 249.049 275.787)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "236.553")
    .attr("cy", "268.8")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 236.553 268.8)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "224.056")
    .attr("cy", "261.814")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 224.056 261.814)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "211.559")
    .attr("cy", "254.828")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 211.559 254.828)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "199.062")
    .attr("cy", "247.841")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 199.062 247.841)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "186.565")
    .attr("cy", "240.855")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 186.565 240.855)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "174.068")
    .attr("cy", "233.869")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 174.068 233.869)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "161.571")
    .attr("cy", "226.882")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 161.571 226.882)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "149.074")
    .attr("cy", "219.896")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 149.074 219.896)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("ellipse")
    .attr("cx", "136.577")
    .attr("cy", "212.91")
    .attr("rx", "1.43172")
    .attr("ry", "1.43172")
    .attr("transform", "rotate(29.207 136.577 212.91)")
    .attr("fill", "#9A9A9A")
    .attr("fill-opacity", "0.15");
  shapes
    .append("path")
    .attr(
      "d",
      "M317.38 276.41C308.728 278.574 300.798 282.977 294.387 289.176L329.716 325.716L317.38 276.41Z"
    )
    .attr("fill", "#235E7C");
  shapes
    .append("path")
    .attr(
      "d",
      "M343.173 276.704C334.573 274.342 325.503 274.286 316.874 276.539L329.716 325.716L343.173 276.704Z"
    )
    .attr("fill", "#B16A6A");
  shapes
    .append("path")
    .attr(
      "d",
      "M365.655 289.776C359.423 283.545 351.678 279.04 343.18 276.706L329.716 325.716L365.655 289.776Z"
    )
    .attr("fill", "#266181");
  shapes
    .append("path")
    .attr(
      "d",
      "M378.479 311.383C375.964 302.826 371.242 295.082 364.787 288.929L329.716 325.716L378.479 311.383Z"
    )
    .attr("fill", "#AB6A33");
  shapes
    .append("path")
    .attr(
      "d",
      "M379.125 337.633C381.216 328.963 380.989 319.896 378.467 311.342L329.716 325.716L379.125 337.633Z"
    )
    .attr("fill", "#DD9E9D");
  shapes
    .append("path")
    .attr(
      "d",
      "M379.125 337.633C381.216 328.963 380.989 319.896 378.467 311.342L329.716 325.716L379.125 337.633Z"
    )
    .attr("fill", "#DD9E9D");
  shapes
    .append("path")
    .attr(
      "d",
      "M366.584 360.702C372.723 354.233 377.051 346.263 379.135 337.591L329.716 325.716L366.584 360.702Z"
    )
    .attr("fill", "#052F47");
  shapes
    .append("path")
    .attr(
      "d",
      "M344.309 374.402C352.852 371.841 360.57 367.078 366.689 360.59L329.716 325.716L344.309 374.402Z"
    )
    .attr("fill", "#B86C70");
  shapes
    .append("path")
    .attr(
      "d",
      "M316.176 374.705C325.399 377.254 335.154 377.148 344.319 374.399L329.716 325.716L316.176 374.705Z"
    )
    .attr("fill", "#C8B9A4");
  shapes
    .append("path")
    .attr(
      "d",
      "M293.155 361.023C299.5 367.594 307.5 372.333 316.311 374.742L329.716 325.716L293.155 361.023Z"
    )
    .attr("fill", "#002A42");
  shapes
    .append("path")
    .attr(
      "d",
      "M280.288 337.554C282.415 346.438 286.898 354.584 293.264 361.136L329.716 325.716L280.288 337.554Z"
    )
    .attr("fill", "#A96A33");
  shapes
    .append("path")
    .attr(
      "d",
      "M281.115 310.842C278.442 319.577 278.172 328.871 280.334 337.746L329.716 325.716L281.115 310.842Z"
    )
    .attr("fill", "#DC9F9B");
  shapes
    .append("path")
    .attr(
      "d",
      "M295.053 288.544C288.372 294.774 283.493 302.689 280.931 311.457L329.716 325.716L295.053 288.544Z"
    )
    .attr("fill", "#C6B9A3");
  shapes
    .append("circle")
    .attr("cx", "329.716")
    .attr("cy", "325.716")
    .attr("r", "45.0991")
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M477.524 313.242C477.761 316.241 477.908 319.266 477.964 322.313L477.464 322.32L477.472 322.82C477.483 323.576 477.489 324.332 477.489 325.09C477.489 325.848 477.483 326.605 477.472 327.36L477.464 327.86L477.964 327.868C477.908 330.915 477.761 333.939 477.524 336.939L477.027 336.898L476.986 337.396C476.862 338.902 476.716 340.401 476.548 341.894L476.492 342.391L476.988 342.446C476.637 345.47 476.196 348.467 475.666 351.433L475.175 351.343L475.085 351.835C474.815 353.32 474.523 354.798 474.208 356.268L474.104 356.757L474.592 356.861C473.946 359.833 473.212 362.771 472.391 365.673L471.911 365.536L471.774 366.017C471.358 367.468 470.922 368.909 470.464 370.342L470.311 370.818L470.787 370.97C469.851 373.86 468.83 376.712 467.726 379.522L467.262 379.337L467.078 379.802C466.521 381.204 465.944 382.596 465.347 383.977L465.148 384.436L465.606 384.634C464.391 387.415 463.094 390.152 461.717 392.842L461.274 392.613L461.044 393.057C460.353 394.398 459.641 395.726 458.91 397.042L458.667 397.479L459.104 397.722C457.622 400.368 456.063 402.964 454.427 405.507L454.008 405.236L453.737 405.655C452.917 406.921 452.078 408.173 451.221 409.412L450.937 409.823L451.348 410.107C449.615 412.594 447.809 415.025 445.932 417.397L445.542 417.086L445.23 417.477C444.291 418.657 443.334 419.821 442.36 420.971L442.037 421.352L442.417 421.675C440.452 423.979 438.417 426.223 436.317 428.402L435.959 428.054L435.611 428.413C434.561 429.495 433.495 430.561 432.413 431.611L432.054 431.959L432.402 432.317C430.222 434.417 427.979 436.452 425.675 438.417L425.352 438.037L424.971 438.36C423.821 439.334 422.657 440.291 421.477 441.23L421.086 441.542L421.397 441.932C419.025 443.809 416.594 445.615 414.107 447.348L413.823 446.937L413.412 447.221C412.173 448.078 410.921 448.917 409.655 449.737L409.236 450.008L409.507 450.427C406.964 452.062 404.368 453.622 401.722 455.104L401.479 454.667L401.042 454.91C399.726 455.641 398.398 456.353 397.057 457.044L396.613 457.274L396.842 457.717C394.152 459.094 391.416 460.391 388.634 461.606L388.436 461.148L387.977 461.347C386.596 461.944 385.204 462.521 383.802 463.078L383.337 463.262L383.522 463.726C380.712 464.83 377.86 465.851 374.97 466.787L374.818 466.311L374.342 466.463C372.909 466.922 371.468 467.358 370.017 467.774L369.536 467.911L369.674 468.391C366.771 469.212 363.833 469.946 360.861 470.592L360.757 470.104L360.268 470.208C358.798 470.523 357.321 470.815 355.835 471.085L355.343 471.175L355.433 471.666C352.467 472.195 349.47 472.637 346.447 472.988L346.391 472.492L345.894 472.548C344.401 472.716 342.902 472.862 341.396 472.986L340.898 473.027L340.939 473.524C337.939 473.761 334.915 473.908 331.868 473.964L331.86 473.464L331.36 473.472C330.605 473.483 329.848 473.489 329.09 473.489C328.332 473.489 327.576 473.483 326.82 473.472L326.32 473.464L326.313 473.964C323.266 473.908 320.241 473.761 317.242 473.524L317.283 473.027L316.784 472.986C315.279 472.862 313.779 472.716 312.287 472.548L311.79 472.492L311.734 472.988C308.71 472.637 305.714 472.195 302.748 471.666L302.837 471.175L302.345 471.085C300.86 470.815 299.383 470.523 297.913 470.208L297.424 470.104L297.32 470.592C294.348 469.946 291.41 469.212 288.507 468.391L288.645 467.911L288.164 467.774C286.713 467.358 285.271 466.922 283.839 466.463L283.363 466.311L283.211 466.787C280.321 465.851 277.469 464.83 274.659 463.726L274.843 463.262L274.378 463.078C272.976 462.521 271.584 461.944 270.203 461.347L269.745 461.148L269.546 461.606C266.765 460.391 264.028 459.094 261.339 457.717L261.568 457.274L261.123 457.044C259.783 456.353 258.455 455.641 257.138 454.91L256.701 454.667L256.459 455.104C253.813 453.622 251.217 452.062 248.674 450.427L248.945 450.008L248.525 449.737C247.26 448.917 246.007 448.078 244.768 447.221L244.357 446.937L244.073 447.348C241.587 445.615 239.156 443.809 236.783 441.932L237.094 441.542L236.703 441.23C235.524 440.291 234.359 439.334 233.21 438.36L232.828 438.037L232.505 438.417C230.201 436.452 227.958 434.417 225.779 432.317L226.126 431.959L225.767 431.611C224.686 430.561 223.62 429.495 222.57 428.413L222.222 428.054L221.864 428.402C219.763 426.222 217.729 423.979 215.763 421.675L216.144 421.352L215.821 420.971C214.847 419.821 213.89 418.657 212.95 417.477L212.639 417.086L212.248 417.397C210.372 415.025 208.565 412.594 206.833 410.107L207.244 409.823L206.959 409.412C206.102 408.173 205.264 406.921 204.444 405.655L204.172 405.236L203.753 405.507C202.118 402.964 200.558 400.368 199.077 397.722L199.513 397.479L199.271 397.042C198.54 395.726 197.828 394.398 197.136 393.057L196.907 392.613L196.463 392.842C195.087 390.152 193.789 387.415 192.575 384.634L193.033 384.436L192.834 383.977C192.236 382.596 191.659 381.204 191.103 379.802L190.918 379.337L190.454 379.522C189.35 376.712 188.329 373.86 187.394 370.97L187.869 370.818L187.717 370.342C187.259 368.909 186.822 367.468 186.407 366.017L186.269 365.536L185.789 365.673C184.969 362.771 184.234 359.833 183.589 356.861L184.077 356.757L183.972 356.268C183.658 354.798 183.366 353.32 183.095 351.835L183.006 351.343L182.515 351.433C181.985 348.467 181.543 345.47 181.192 342.446L181.688 342.391L181.632 341.894C181.464 340.401 181.318 338.902 181.195 337.396L181.154 336.898L180.656 336.939C180.42 333.939 180.273 330.915 180.217 327.868L180.716 327.86L180.709 327.36C180.697 326.605 180.692 325.848 180.692 325.09C180.692 324.332 180.697 323.576 180.709 322.82L180.716 322.32L180.217 322.313C180.273 319.266 180.42 316.241 180.656 313.242L181.154 313.283L181.195 312.784C181.318 311.279 181.464 309.779 181.632 308.287L181.688 307.79L181.192 307.734C181.543 304.71 181.985 301.714 182.515 298.748L183.006 298.837L183.095 298.345C183.366 296.86 183.658 295.382 183.972 293.913L184.077 293.424L183.589 293.32C184.234 290.348 184.969 287.41 185.789 284.507L186.269 284.644L186.407 284.164C186.822 282.713 187.259 281.271 187.717 279.839L187.869 279.363L187.394 279.211C188.329 276.32 189.35 273.469 190.454 270.659L190.918 270.843L191.103 270.378C191.659 268.976 192.236 267.584 192.834 266.203L193.033 265.745L192.575 265.546C193.789 262.765 195.087 260.028 196.463 257.339L196.907 257.568L197.136 257.123C197.828 255.783 198.54 254.455 199.271 253.138L199.513 252.701L199.077 252.459C200.558 249.813 202.118 247.217 203.753 244.674L204.172 244.945L204.444 244.525C205.264 243.26 206.102 242.007 206.959 240.768L207.244 240.357L206.833 240.073C208.565 237.587 210.372 235.156 212.248 232.783L212.639 233.094L212.95 232.703C213.89 231.524 214.847 230.359 215.821 229.21L216.144 228.828L215.763 228.505C217.729 226.201 219.763 223.958 221.864 221.779L222.222 222.126L222.57 221.767C223.62 220.685 224.686 219.62 225.767 218.57L226.126 218.222L225.779 217.864C227.958 215.763 230.201 213.729 232.506 211.763L232.828 212.144L233.21 211.821C234.359 210.847 235.524 209.89 236.703 208.95L237.094 208.639L236.783 208.248C239.156 206.371 241.587 204.565 244.073 202.833L244.357 203.244L244.768 202.959C246.007 202.102 247.26 201.264 248.525 200.444L248.945 200.172L248.674 199.753C251.217 198.118 253.813 196.558 256.459 195.077L256.701 195.513L257.138 195.271C258.455 194.539 259.783 193.828 261.123 193.136L261.568 192.907L261.339 192.463C264.028 191.087 266.765 189.789 269.546 188.575L269.745 189.033L270.203 188.834C271.584 188.236 272.976 187.659 274.378 187.103L274.843 186.918L274.659 186.454C277.469 185.35 280.321 184.329 283.211 183.394L283.363 183.869L283.839 183.717C285.271 183.259 286.713 182.822 288.164 182.407L288.644 182.269L288.507 181.789C291.41 180.969 294.348 180.234 297.32 179.589L297.424 180.077L297.913 179.972C299.382 179.658 300.86 179.365 302.345 179.095L302.837 179.006L302.748 178.515C305.714 177.985 308.71 177.543 311.734 177.192L311.79 177.688L312.287 177.632C313.779 177.464 315.279 177.318 316.784 177.195L317.283 177.154L317.242 176.656C320.241 176.42 323.266 176.273 326.313 176.217L326.32 176.716L326.82 176.709C327.576 176.697 328.332 176.692 329.09 176.692C329.848 176.692 330.605 176.697 331.36 176.709L331.86 176.716L331.868 176.217C334.915 176.273 337.939 176.42 340.939 176.656L340.898 177.154L341.396 177.195C342.902 177.318 344.401 177.464 345.894 177.632L346.391 177.688L346.446 177.192C349.47 177.543 352.467 177.985 355.433 178.515L355.343 179.006L355.835 179.095C357.321 179.365 358.798 179.658 360.268 179.972L360.757 180.077L360.861 179.588C363.833 180.234 366.771 180.969 369.674 181.789L369.536 182.269L370.017 182.407C371.468 182.822 372.909 183.259 374.342 183.717L374.818 183.869L374.97 183.394C377.86 184.329 380.712 185.35 383.522 186.454L383.337 186.918L383.802 187.103C385.204 187.659 386.596 188.236 387.977 188.834L388.436 189.033L388.634 188.575C391.416 189.789 394.152 191.087 396.842 192.463L396.613 192.907L397.057 193.136C398.398 193.828 399.726 194.539 401.042 195.271L401.479 195.513L401.722 195.077C404.368 196.558 406.964 198.118 409.507 199.753L409.236 200.172L409.655 200.444C410.921 201.264 412.173 202.102 413.412 202.959L413.823 203.244L414.107 202.833C416.594 204.565 419.025 206.371 421.397 208.248L421.086 208.639L421.477 208.95C422.657 209.89 423.821 210.847 424.971 211.821L425.352 212.144L425.675 211.763C427.979 213.729 430.223 215.763 432.402 217.864L432.054 218.222L432.413 218.57C433.495 219.62 434.561 220.685 435.611 221.767L435.959 222.126L436.317 221.779C438.417 223.958 440.452 226.201 442.417 228.505L442.037 228.828L442.36 229.21C443.334 230.359 444.291 231.524 445.23 232.703L445.542 233.094L445.932 232.783C447.809 235.156 449.615 237.587 451.348 240.073L450.937 240.357L451.221 240.768C452.078 242.007 452.917 243.26 453.737 244.525L454.009 244.945L454.427 244.674C456.063 247.217 457.622 249.813 459.104 252.459L458.667 252.701L458.91 253.138C459.641 254.455 460.353 255.783 461.044 257.123L461.274 257.568L461.717 257.339C463.094 260.028 464.391 262.765 465.606 265.546L465.148 265.745L465.347 266.203C465.944 267.584 466.521 268.976 467.078 270.378L467.262 270.843L467.726 270.659C468.83 273.469 469.851 276.32 470.787 279.211L470.311 279.363L470.464 279.839C470.922 281.271 471.358 282.713 471.774 284.164L471.911 284.644L472.391 284.507C473.212 287.41 473.946 290.348 474.592 293.32L474.104 293.424L474.208 293.913C474.523 295.382 474.815 296.86 475.085 298.345L475.175 298.837L475.666 298.748C476.196 301.714 476.637 304.71 476.988 307.734L476.492 307.79L476.548 308.287C476.716 309.779 476.862 311.279 476.986 312.784L477.027 313.283L477.524 313.242Z"
    )
    .attr("stroke", "#A4A4A4")
    .attr("stroke-linecap", "square")
    .attr("stroke-dasharray", "4.5 10");
  // n1
  shapes
    .append("rect")
    .attr("x", "317.546")
    .attr("y", () => 170 - data.n1.n * 13)
    .attr("width", "24.3392")
    .attr("height", data.n1.n * 13)
    .attr("fill", data.n1.color || "#999A56");
  // n2
  shapes
    .append("rect")
    .attr("x", "341.66")
    .attr("y", () => 237.281 + (7 - data.n2.n) * 13.5)
    .attr("width", "24.3392")
    .attr("height", () => data.n2.n * 13.5)
    .attr("transform", "rotate(-179.66 341.66 257.781)")
    .attr("fill", data.n2.color || "#E1B463");
  // n19
  shapes
    .append("rect")
    .attr("x", "98.9838")
    .attr("y", () => 411 - data.n19.n * 13)
    .attr("width", "24.3392")
    .attr("height", () => data.n19.n * 13)
    .attr("transform", "rotate(-91.1544 98.9838 336.546)")
    .attr("fill", data.n19.color || "E1B463");
  // n20
  shapes
    .append("rect")
    .attr("x", "263.381")
    .attr("y", () => 291 + (7 - data.n20.n) * 13.5)
    .attr("width", "24.3392")
    .attr("height", () => data.n20.n * 13.5)
    .attr("transform", "rotate(90.0115 263.381 311.452)")
    .attr("fill", data.n20.color || "#E1B463");
  shapes
    .append("rect")
    .attr("x", "136.167")
    .attr("y", "452.355")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-120.957 136.167 452.355)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "265.24")
    .attr("y", "345.064")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(59.0864 265.24 345.064)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "228.225")
    .attr("y", "530.631")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-152.074 228.225 530.631)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "285.266")
    .attr("y", "372.021")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(28.0105 285.266 372.021)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "339.622")
    .attr("y", "557.436")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-179.239 339.622 557.436)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "316.793")
    .attr("y", "387.996")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(0.51228 316.793 387.996)")
    .attr("fill", "#E1B463");
  shapes
    .append("rect")
    .attr("x", "456.652")
    .attr("y", "519.195")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(150.918 456.652 519.195)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "350.012")
    .attr("y", "384.581")
    .attr("width", "24.3392")
    .attr("height", "75.881")
    .attr("transform", "rotate(-30.0667 350.012 384.581)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "124.673")
    .attr("y", "221.827")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-61.6624 124.673 221.827)")
    .attr("fill", "#E1B463");
  shapes
    .append("rect")
    .attr("x", "201.577")
    .attr("y", "261.951")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-61.6624 201.577 261.951)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "204.441")
    .attr("y", "131.003")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-30.0034 204.441 131.003)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "247.392")
    .attr("y", "205.453")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-30.0034 247.392 205.453)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "536.11")
    .attr("y", "430.339")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(120.393 536.11 430.339)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "379.413")
    .attr("y", "364.782")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-57.749 379.413 364.782)")
    .attr("fill", "#E1B463");
  shapes
    .append("rect")
    .attr("x", "562.468")
    .attr("y", "312.425")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(90.4685 562.468 312.425)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "393.411")
    .attr("y", "336.402")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-89.4547 393.411 336.402)")
    .attr("fill", "#E1B463");
  shapes
    .append("rect")
    .attr("x", "523.809")
    .attr("y", "197.577")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(60.3637 523.809 197.577)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "445.065")
    .attr("y", "243.392")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(60.3637 445.065 243.392)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "431.478")
    .attr("y", "121.696")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(28.854 431.478 121.696)")
    .attr("fill", "#999A56");
  shapes
    .append("rect")
    .attr("x", "376.199")
    .attr("y", "272.941")
    .attr("width", "24.3392")
    .attr("height", "75.8811")
    .attr("transform", "rotate(-151.308 376.199 272.941)")
    .attr("fill", "#E1B463");
  shapes
    .append("path")
    .attr(
      "d",
      "M543.821 475.423L536.062 471.357L537.266 469.061C537.986 467.687 538.83 466.842 539.799 466.528C540.771 466.206 541.92 466.393 543.245 467.087C544.57 467.782 545.377 468.62 545.666 469.602C545.959 470.578 545.745 471.753 545.025 473.127L543.821 475.423ZM543.799 472.363C544.1 471.789 544.256 471.284 544.268 470.848C544.273 470.408 544.127 470.006 543.83 469.643C543.532 469.279 543.072 468.934 542.448 468.607C541.818 468.277 541.272 468.095 540.811 468.061C540.343 468.023 539.933 468.133 539.581 468.392C539.222 468.646 538.892 469.06 538.591 469.634L538.118 470.537L543.326 473.267L543.799 472.363ZM547.771 467.888L540.012 463.821L542.774 458.549L544.039 459.212L542.056 462.996L543.906 463.965L545.777 460.394L546.999 461.035L545.128 464.606L547.286 465.737L549.269 461.953L550.533 462.616L547.771 467.888ZM552.673 458.792C552.398 459.316 552.075 459.802 551.706 460.25C551.329 460.693 550.957 461.032 550.591 461.264L549.462 460.239C549.709 460.061 549.958 459.853 550.209 459.615C550.454 459.372 550.684 459.114 550.9 458.839C551.11 458.56 551.285 458.286 551.426 458.017C551.671 457.549 551.777 457.149 551.744 456.815C551.711 456.482 551.539 456.233 551.227 456.07C551.057 455.981 550.895 455.946 550.741 455.964C550.579 455.979 550.415 456.042 550.249 456.153C550.075 456.261 549.886 456.415 549.681 456.615C549.477 456.815 549.247 457.056 548.991 457.337C548.688 457.657 548.391 457.93 548.101 458.157C547.81 458.384 547.517 458.556 547.222 458.672C546.93 458.781 546.633 458.829 546.333 458.816C546.029 458.792 545.718 458.697 545.399 458.53C544.705 458.166 544.313 457.622 544.223 456.897C544.126 456.169 544.331 455.32 544.84 454.349C545.093 453.867 545.389 453.413 545.73 452.986C546.068 452.549 546.406 452.198 546.743 451.932L547.867 452.968C547.526 453.223 547.205 453.533 546.905 453.9C546.597 454.262 546.337 454.646 546.126 455.05C545.873 455.531 545.756 455.935 545.775 456.261C545.787 456.584 545.935 456.819 546.218 456.968C546.388 457.057 546.552 457.097 546.71 457.09C546.86 457.078 547.015 457.024 547.174 456.927C547.337 456.822 547.515 456.681 547.708 456.502C547.905 456.316 548.131 456.092 548.387 455.828C548.712 455.484 549.027 455.193 549.332 454.955C549.634 454.707 549.932 454.525 550.228 454.408C550.52 454.282 550.817 454.225 551.117 454.238C551.417 454.25 551.73 454.342 552.056 454.513C552.765 454.884 553.175 455.447 553.286 456.2C553.393 456.943 553.189 457.807 552.673 458.792ZM554.941 454.205L547.182 450.139L547.995 448.587L555.754 452.653L554.941 454.205ZM556.653 450.937L548.894 446.871L550.175 444.427C550.781 443.272 551.416 442.525 552.081 442.187C552.749 441.842 553.491 441.883 554.306 442.31C555.107 442.73 555.579 443.302 555.722 444.028C555.859 444.75 555.66 445.621 555.125 446.641L554.078 448.639L552.877 448.01L553.807 446.235C554.134 445.611 554.278 445.113 554.238 444.74C554.199 444.367 553.977 444.075 553.573 443.863C553.169 443.652 552.803 443.636 552.474 443.816C552.145 443.995 551.817 444.397 551.49 445.021L550.95 446.052L557.433 449.449L556.653 450.937ZM558.998 446.463L553.76 447.876L554.668 446.144L559.94 444.666L558.998 446.463ZM560.537 443.526L552.778 439.46L555.541 434.188L556.806 434.851L554.823 438.635L556.672 439.604L558.544 436.033L559.766 436.673L557.895 440.245L560.052 441.375L562.035 437.591L563.3 438.254L560.537 443.526Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M592.553 439.437C592.272 440.355 591.863 441.092 591.325 441.647C590.78 442.2 590.132 442.554 589.382 442.71C588.634 442.858 587.809 442.794 586.906 442.518C586.003 442.242 585.283 441.834 584.746 441.293C584.21 440.745 583.875 440.09 583.739 439.33C583.596 438.566 583.665 437.726 583.945 436.808C584.265 435.76 584.775 434.899 585.474 434.226L586.762 435.021C586.078 435.673 585.616 436.39 585.378 437.17C585.2 437.752 585.162 438.288 585.263 438.779C585.364 439.27 585.598 439.693 585.967 440.048C586.327 440.4 586.81 440.669 587.414 440.854C588.011 441.036 588.562 441.083 589.065 440.994C589.569 440.906 590 440.686 590.358 440.335C590.716 439.985 590.984 439.518 591.162 438.937C591.396 438.172 591.413 437.32 591.215 436.381L592.727 436.441C592.931 437.39 592.873 438.389 592.553 439.437ZM594.904 431.739C594.635 432.619 594.229 433.332 593.686 433.877C593.136 434.42 592.485 434.769 591.735 434.925C590.98 435.07 590.162 435.009 589.282 434.74C588.395 434.469 587.682 434.063 587.145 433.522C586.609 432.974 586.269 432.322 586.123 431.567C585.97 430.809 586.028 429.99 586.297 429.11C586.57 428.215 586.981 427.5 587.529 426.965C588.072 426.419 588.717 426.073 589.465 425.925C590.215 425.769 591.034 425.827 591.922 426.098C592.802 426.367 593.513 426.776 594.056 427.327C594.593 427.868 594.939 428.517 595.092 429.275C595.24 430.023 595.177 430.844 594.904 431.739ZM593.492 431.308C593.665 430.742 593.698 430.225 593.59 429.757C593.482 429.289 593.245 428.886 592.88 428.549C592.509 428.201 592.021 427.935 591.417 427.751C590.813 427.566 590.263 427.515 589.77 427.599C589.27 427.672 588.845 427.873 588.494 428.2C588.143 428.528 587.881 428.975 587.708 429.541C587.538 430.1 587.505 430.617 587.611 431.092C587.719 431.56 587.958 431.968 588.329 432.316C588.694 432.653 589.179 432.914 589.783 433.099C590.388 433.283 590.94 433.339 591.439 433.266C591.933 433.182 592.355 432.977 592.706 432.649C593.06 432.314 593.322 431.867 593.492 431.308ZM596.518 426.046L588.14 423.487L588.652 421.811L595.425 420.053L595.432 420.03L589.728 418.288L590.219 416.681L598.597 419.24L598.081 420.927L591.312 422.674L591.305 422.697L597.008 424.439L596.518 426.046ZM599.775 415.383L590.527 415.67L591.067 413.903L598.487 413.848L598.494 413.825L592.371 409.634L592.911 407.866L600.416 413.283L599.775 415.383ZM601.623 409.333L593.245 406.774L593.757 405.098L602.135 407.658L601.623 409.333ZM604.025 401.881C603.744 402.799 603.335 403.535 602.798 404.091C602.252 404.643 601.605 404.998 600.854 405.153C600.107 405.301 599.281 405.237 598.378 404.961C597.476 404.686 596.755 404.277 596.218 403.737C595.683 403.189 595.347 402.534 595.212 401.773C595.068 401.01 595.137 400.169 595.417 399.251C595.738 398.203 596.247 397.342 596.946 396.669L598.234 397.464C597.55 398.117 597.088 398.833 596.85 399.614C596.672 400.195 596.634 400.731 596.735 401.222C596.836 401.713 597.071 402.136 597.439 402.491C597.8 402.844 598.282 403.113 598.887 403.297C599.483 403.48 600.034 403.526 600.538 403.438C601.042 403.349 601.473 403.129 601.831 402.779C602.189 402.428 602.457 401.962 602.634 401.381C602.868 400.615 602.886 399.763 602.687 398.825L604.2 398.885C604.403 399.834 604.345 400.832 604.025 401.881ZM605.841 395.523L598.875 393.395L598.055 396.08L596.643 395.649L598.792 388.614L600.204 389.045L599.383 391.731L606.35 393.859L605.841 395.523ZM607.566 389.877L599.188 387.318L599.7 385.642L608.078 388.201L607.566 389.877ZM609.943 382.505C609.675 383.385 609.269 384.097 608.726 384.642C608.175 385.185 607.525 385.534 606.775 385.69C606.019 385.836 605.201 385.774 604.322 385.505C603.434 385.234 602.722 384.828 602.184 384.288C601.649 383.739 601.308 383.087 601.163 382.332C601.01 381.574 601.067 380.755 601.336 379.875C601.61 378.98 602.02 378.265 602.569 377.73C603.112 377.185 603.757 376.838 604.505 376.69C605.255 376.535 606.074 376.592 606.961 376.863C607.841 377.132 608.553 377.542 609.095 378.092C609.633 378.633 609.978 379.282 610.132 380.04C610.28 380.788 610.217 381.61 609.943 382.505ZM608.532 382.073C608.705 381.507 608.737 380.99 608.629 380.522C608.521 380.054 608.285 379.652 607.919 379.314C607.549 378.967 607.061 378.701 606.457 378.516C605.852 378.331 605.303 378.281 604.809 378.364C604.31 378.437 603.885 378.638 603.534 378.966C603.183 379.293 602.921 379.74 602.748 380.307C602.577 380.865 602.545 381.382 602.65 381.858C602.758 382.326 602.998 382.733 603.368 383.081C603.734 383.418 604.219 383.679 604.823 383.864C605.427 384.049 605.979 384.104 606.478 384.031C606.972 383.948 607.395 383.742 607.746 383.414C608.099 383.079 608.361 382.632 608.532 382.073ZM611.557 376.811L603.179 374.252L603.691 372.576L610.464 370.818L610.471 370.795L604.767 369.053L605.258 367.446L613.636 370.006L613.121 371.693L606.351 373.439L606.344 373.462L612.048 375.204L611.557 376.811Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M439.099 560.233C438.581 560.52 438.044 560.749 437.489 560.919C436.93 561.082 436.434 561.16 436.001 561.154L435.621 559.676C435.925 559.664 436.248 559.627 436.589 559.566C436.926 559.498 437.261 559.408 437.593 559.298C437.921 559.18 438.218 559.048 438.484 558.9C438.945 558.644 439.254 558.368 439.41 558.071C439.566 557.775 439.558 557.473 439.388 557.165C439.295 556.997 439.179 556.878 439.04 556.809C438.897 556.732 438.725 556.695 438.525 556.696C438.32 556.691 438.078 556.715 437.797 556.77C437.517 556.825 437.192 556.899 436.824 556.994C436.395 557.094 435.997 557.159 435.629 557.189C435.261 557.219 434.922 557.201 434.612 557.135C434.308 557.066 434.034 556.943 433.79 556.767C433.55 556.581 433.342 556.33 433.168 556.015C432.788 555.329 432.759 554.659 433.083 554.004C433.402 553.342 434.041 552.746 435 552.215C435.476 551.951 435.973 551.735 436.493 551.566C437.015 551.387 437.49 551.279 437.918 551.243L438.287 552.726C437.862 552.751 437.423 552.834 436.971 552.975C436.515 553.109 436.087 553.286 435.688 553.507C435.212 553.771 434.893 554.044 434.729 554.327C434.562 554.602 434.556 554.88 434.711 555.16C434.804 555.328 434.918 555.452 435.054 555.532C435.186 555.605 435.345 555.645 435.532 555.652C435.725 555.654 435.952 555.634 436.211 555.591C436.478 555.544 436.79 555.48 437.149 555.401C437.61 555.292 438.033 555.222 438.418 555.191C438.807 555.15 439.156 555.162 439.467 555.228C439.781 555.282 440.06 555.398 440.304 555.574C440.547 555.75 440.758 555.998 440.937 556.32C441.324 557.02 441.357 557.715 441.036 558.406C440.717 559.085 440.071 559.694 439.099 560.233ZM443.432 557.696L439.187 550.033L444.393 547.149L445.085 548.398L441.348 550.468L442.36 552.294L445.887 550.341L446.556 551.548L443.029 553.502L444.209 555.632L447.946 553.562L448.638 554.812L443.432 557.696ZM450.105 553.999L445.86 546.336L447.361 545.505L450.891 551.876L454.88 549.667L455.595 550.958L450.105 553.999ZM456.748 550.319L452.503 542.656L457.888 539.673L458.597 540.954L454.682 543.123L455.804 545.149L459.509 543.096L460.201 544.345L456.496 546.398L458.217 549.505L456.748 550.319Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M368.973 612.769C368.053 613.043 367.213 613.11 366.453 612.969C365.691 612.821 365.038 612.477 364.493 611.938C363.956 611.397 363.553 610.674 363.284 609.769C363.014 608.864 362.956 608.038 363.109 607.292C363.27 606.542 363.63 605.901 364.189 605.367C364.745 604.826 365.484 604.418 366.404 604.144C367.454 603.831 368.453 603.78 369.4 603.99L369.45 605.503C368.528 605.293 367.676 605.305 366.894 605.538C366.311 605.712 365.843 605.976 365.49 606.332C365.137 606.687 364.914 607.117 364.822 607.62C364.728 608.116 364.771 608.666 364.951 609.272C365.129 609.87 365.395 610.355 365.747 610.725C366.1 611.096 366.521 611.334 367.011 611.438C367.502 611.542 368.038 611.508 368.621 611.334C369.387 611.106 370.107 610.649 370.78 609.965L371.566 611.258C370.888 611.953 370.023 612.457 368.973 612.769ZM376.687 610.472C375.805 610.734 374.987 610.79 374.233 610.639C373.476 610.481 372.825 610.132 372.281 609.593C371.742 609.044 371.341 608.329 371.078 607.447C370.813 606.558 370.757 605.74 370.91 604.993C371.071 604.244 371.426 603.599 371.975 603.06C372.522 602.514 373.236 602.109 374.118 601.846C375.015 601.579 375.838 601.526 376.587 601.687C377.341 601.837 377.987 602.184 378.524 602.725C379.068 603.264 379.473 603.978 379.738 604.867C380.001 605.749 380.053 606.568 379.894 607.325C379.741 608.072 379.391 608.719 378.844 609.265C378.303 609.802 377.584 610.204 376.687 610.472ZM376.266 609.057C376.833 608.888 377.282 608.629 377.612 608.28C377.942 607.932 378.147 607.512 378.226 607.021C378.31 606.52 378.262 605.966 378.082 605.361C377.901 604.755 377.64 604.269 377.297 603.904C376.96 603.529 376.558 603.285 376.091 603.174C375.624 603.063 375.106 603.092 374.539 603.261C373.979 603.427 373.53 603.686 373.193 604.037C372.862 604.386 372.655 604.811 372.571 605.312C372.492 605.803 372.542 606.351 372.723 606.957C372.903 607.563 373.162 608.053 373.499 608.429C373.842 608.794 374.247 609.032 374.714 609.144C375.189 609.253 375.706 609.224 376.266 609.057ZM382.323 608.667L379.822 600.272L381.846 599.669L385.452 603.954L385.475 603.947L386.148 598.388L388.172 597.785L390.673 606.18L389.062 606.66L387.315 600.795L387.292 600.801L386.714 605.419L385.219 605.864L382.209 602.316L382.186 602.322L383.933 608.188L382.323 608.667ZM392.442 605.653L389.941 597.258L391.965 596.655L395.571 600.94L395.594 600.933L396.267 595.373L398.291 594.77L400.792 603.166L399.182 603.645L397.434 597.78L397.411 597.787L396.833 602.404L395.338 602.85L392.328 599.301L392.305 599.308L394.052 605.173L392.442 605.653ZM402.653 602.611L400.153 594.216L401.832 593.716L404.333 602.111L402.653 602.611ZM408.926 600.868C408.359 601.037 407.786 601.145 407.207 601.192C406.626 601.232 406.125 601.202 405.703 601.102L405.649 599.578C405.949 599.63 406.272 599.664 406.618 599.677C406.962 599.683 407.308 599.668 407.656 599.631C408.002 599.587 408.32 599.521 408.611 599.434C409.118 599.283 409.478 599.08 409.694 598.824C409.91 598.567 409.968 598.27 409.867 597.933C409.812 597.749 409.725 597.608 409.604 597.511C409.481 597.406 409.321 597.332 409.125 597.29C408.926 597.241 408.684 597.213 408.399 597.206C408.113 597.199 407.78 597.203 407.4 597.216C406.959 597.222 406.556 597.2 406.191 597.15C405.825 597.1 405.498 597.01 405.208 596.879C404.927 596.746 404.686 596.568 404.485 596.343C404.29 596.109 404.142 595.82 404.039 595.475C403.815 594.723 403.931 594.063 404.387 593.493C404.841 592.915 405.594 592.47 406.644 592.157C407.165 592.002 407.698 591.897 408.241 591.844C408.79 591.781 409.277 591.777 409.703 591.834L409.745 593.362C409.325 593.295 408.878 593.282 408.406 593.322C407.932 593.355 407.476 593.437 407.039 593.567C406.518 593.722 406.147 593.92 405.926 594.161C405.704 594.394 405.638 594.664 405.729 594.971C405.784 595.155 405.869 595.301 405.985 595.408C406.098 595.508 406.245 595.581 406.426 595.628C406.614 595.672 406.84 595.7 407.103 595.714C407.373 595.725 407.692 595.73 408.059 595.73C408.532 595.722 408.961 595.745 409.344 595.798C409.732 595.841 410.071 595.927 410.361 596.058C410.655 596.179 410.903 596.352 411.103 596.576C411.303 596.8 411.456 597.088 411.561 597.441C411.79 598.208 411.673 598.894 411.21 599.499C410.753 600.094 409.992 600.551 408.926 600.868ZM416.271 598.68C415.704 598.849 415.131 598.957 414.552 599.004C413.971 599.044 413.47 599.014 413.048 598.914L412.994 597.39C413.294 597.442 413.617 597.476 413.963 597.489C414.307 597.495 414.653 597.48 415.001 597.443C415.347 597.399 415.665 597.333 415.957 597.246C416.463 597.095 416.824 596.892 417.039 596.636C417.255 596.379 417.313 596.082 417.212 595.745C417.158 595.561 417.07 595.42 416.949 595.323C416.826 595.218 416.666 595.144 416.47 595.102C416.272 595.053 416.029 595.025 415.744 595.018C415.458 595.011 415.125 595.015 414.745 595.028C414.304 595.034 413.901 595.012 413.536 594.962C413.17 594.912 412.843 594.822 412.554 594.691C412.272 594.558 412.031 594.38 411.831 594.155C411.636 593.921 411.487 593.632 411.384 593.287C411.16 592.535 411.276 591.875 411.733 591.305C412.187 590.727 412.939 590.282 413.989 589.969C414.511 589.814 415.043 589.709 415.586 589.656C416.135 589.593 416.622 589.589 417.048 589.646L417.09 591.174C416.67 591.107 416.223 591.094 415.751 591.134C415.277 591.167 414.821 591.249 414.384 591.379C413.863 591.534 413.492 591.732 413.271 591.973C413.049 592.206 412.983 592.476 413.075 592.783C413.129 592.967 413.214 593.113 413.33 593.22C413.443 593.32 413.59 593.393 413.771 593.44C413.959 593.484 414.185 593.512 414.448 593.526C414.718 593.537 415.037 593.542 415.404 593.542C415.878 593.534 416.306 593.557 416.689 593.61C417.077 593.653 417.416 593.739 417.706 593.87C418 593.991 418.248 594.164 418.448 594.388C418.649 594.612 418.801 594.9 418.906 595.253C419.135 596.02 419.018 596.706 418.555 597.311C418.098 597.906 417.337 598.362 416.271 598.68ZM421.14 597.104L418.639 588.709L420.318 588.209L422.819 596.604L421.14 597.104ZM428.597 595.008C427.715 595.271 426.897 595.327 426.143 595.176C425.386 595.017 424.735 594.669 424.191 594.13C423.651 593.581 423.251 592.865 422.988 591.984C422.723 591.094 422.667 590.276 422.82 589.529C422.981 588.78 423.336 588.136 423.885 587.597C424.431 587.05 425.146 586.645 426.027 586.383C426.924 586.116 427.747 586.062 428.497 586.223C429.251 586.374 429.897 586.72 430.434 587.261C430.978 587.8 431.383 588.515 431.648 589.404C431.91 590.286 431.962 591.105 431.804 591.862C431.651 592.609 431.301 593.255 430.754 593.802C430.213 594.339 429.494 594.741 428.597 595.008ZM428.175 593.594C428.743 593.425 429.192 593.166 429.522 592.817C429.852 592.468 430.057 592.048 430.136 591.557C430.22 591.056 430.172 590.503 429.992 589.897C429.811 589.292 429.55 588.806 429.207 588.441C428.87 588.065 428.468 587.822 428.001 587.711C427.533 587.6 427.016 587.628 426.449 587.797C425.889 587.964 425.44 588.223 425.102 588.574C424.772 588.923 424.565 589.348 424.48 589.849C424.401 590.34 424.452 590.888 424.632 591.494C424.813 592.099 425.072 592.59 425.409 592.965C425.751 593.331 426.156 593.569 426.624 593.68C427.098 593.789 427.616 593.76 428.175 593.594ZM434.233 593.204L431.732 584.809L433.411 584.309L438.621 588.979L438.644 588.973L436.942 583.257L438.552 582.777L441.053 591.173L439.362 591.676L434.163 587.002L434.14 587.009L435.843 592.724L434.233 593.204Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M274.906 583.108L274.938 574.348L277.698 574.358C279.002 574.363 279.957 574.582 280.564 575.016C281.178 575.451 281.484 576.128 281.48 577.048C281.477 577.952 281.187 578.635 280.609 579.097C280.031 579.551 279.166 579.775 278.014 579.771L275.758 579.763L275.763 578.407L277.767 578.414C278.471 578.417 278.98 578.315 279.292 578.108C279.605 577.901 279.762 577.57 279.764 577.114C279.766 576.658 279.611 576.325 279.3 576.116C278.988 575.907 278.481 575.801 277.777 575.798L276.613 575.794L276.586 583.114L274.906 583.108ZM279.958 583.126L276.289 579.129L278.245 579.136L281.986 583.134L279.958 583.126ZM283.273 583.138L283.305 574.378L289.257 574.4L289.252 575.828L284.98 575.813L284.972 577.901L289.004 577.915L288.999 579.295L284.967 579.281L284.959 581.716L289.23 581.732L289.225 583.16L283.273 583.138ZM293.605 583.296C293.013 583.294 292.433 583.232 291.865 583.11C291.298 582.98 290.826 582.806 290.451 582.589L290.84 581.114C291.112 581.251 291.412 581.376 291.739 581.489C292.067 581.594 292.402 581.68 292.746 581.745C293.09 581.802 293.414 581.831 293.718 581.832C294.246 581.834 294.65 581.744 294.931 581.561C295.212 581.378 295.353 581.11 295.354 580.758C295.354 580.566 295.311 580.406 295.224 580.278C295.136 580.142 295.004 580.025 294.829 579.928C294.653 579.824 294.43 579.727 294.158 579.638C293.886 579.549 293.567 579.456 293.199 579.359C292.775 579.237 292.396 579.1 292.06 578.946C291.725 578.793 291.438 578.612 291.198 578.403C290.967 578.194 290.788 577.954 290.661 577.681C290.542 577.401 290.483 577.081 290.484 576.721C290.487 575.937 290.79 575.338 291.391 574.924C291.993 574.502 292.841 574.293 293.937 574.297C294.481 574.299 295.021 574.353 295.557 574.459C296.1 574.557 296.568 574.695 296.959 574.872L296.558 576.347C296.175 576.161 295.751 576.02 295.287 575.922C294.824 575.816 294.364 575.763 293.908 575.761C293.364 575.759 292.952 575.842 292.671 576.009C292.39 576.168 292.25 576.407 292.248 576.727C292.248 576.919 292.287 577.083 292.367 577.219C292.446 577.348 292.566 577.46 292.725 577.557C292.893 577.653 293.101 577.746 293.348 577.835C293.604 577.924 293.908 578.021 294.259 578.126C294.715 578.256 295.118 578.401 295.47 578.563C295.829 578.716 296.129 578.897 296.368 579.106C296.615 579.307 296.802 579.544 296.929 579.816C297.056 580.089 297.119 580.409 297.118 580.777C297.115 581.577 296.805 582.2 296.187 582.645C295.577 583.083 294.717 583.3 293.605 583.296ZM298.625 583.194L298.657 574.434L301.297 574.444C302.617 574.449 303.596 574.7 304.234 575.199C304.88 575.697 305.201 576.45 305.198 577.458C305.194 578.458 304.883 579.209 304.266 579.711C303.656 580.213 302.743 580.461 301.527 580.457L299.475 580.449L299.48 579.009L301.316 579.016C302.068 579.019 302.616 578.897 302.961 578.65C303.306 578.395 303.48 577.996 303.482 577.452C303.484 576.908 303.313 576.511 302.97 576.262C302.627 576.013 302.079 575.887 301.327 575.884L300.331 575.88L300.305 583.2L298.625 583.194ZM310.497 583.358C309.577 583.354 308.777 583.171 308.099 582.809C307.42 582.438 306.898 581.916 306.532 581.243C306.175 580.562 305.998 579.761 306.001 578.841C306.004 577.913 306.187 577.114 306.55 576.443C306.92 575.772 307.446 575.258 308.127 574.901C308.809 574.535 309.609 574.354 310.529 574.358C311.465 574.361 312.269 574.548 312.939 574.918C313.618 575.281 314.136 575.799 314.494 576.472C314.859 577.145 315.04 577.946 315.037 578.874C315.034 579.794 314.847 580.593 314.476 581.272C314.114 581.943 313.592 582.461 312.911 582.826C312.237 583.184 311.433 583.361 310.497 583.358ZM310.502 581.882C311.094 581.884 311.598 581.766 312.015 581.527C312.432 581.289 312.749 580.946 312.967 580.499C313.193 580.043 313.307 579.5 313.309 578.868C313.311 578.236 313.201 577.695 312.979 577.247C312.765 576.79 312.45 576.441 312.035 576.199C311.62 575.958 311.116 575.836 310.524 575.834C309.94 575.831 309.436 575.95 309.011 576.188C308.594 576.427 308.273 576.773 308.047 577.229C307.829 577.676 307.719 578.215 307.717 578.847C307.715 579.479 307.821 580.024 308.035 580.481C308.258 580.929 308.576 581.275 308.991 581.516C309.414 581.758 309.918 581.879 310.502 581.882ZM316.414 583.259L316.446 574.499L318.198 574.506L321.836 580.483L321.86 580.483L321.882 574.519L323.562 574.525L323.53 583.285L321.766 583.279L318.139 577.301L318.115 577.301L318.094 583.265L316.414 583.259ZM328.198 583.422C327.606 583.42 327.026 583.358 326.459 583.236C325.891 583.106 325.42 582.932 325.045 582.715L325.434 581.24C325.705 581.377 326.005 581.502 326.333 581.615C326.66 581.72 326.996 581.806 327.34 581.871C327.683 581.928 328.007 581.957 328.311 581.958C328.839 581.96 329.244 581.87 329.524 581.687C329.805 581.504 329.946 581.236 329.947 580.884C329.948 580.692 329.905 580.532 329.817 580.404C329.73 580.268 329.598 580.151 329.422 580.054C329.247 579.95 329.023 579.853 328.751 579.764C328.48 579.675 328.16 579.582 327.792 579.485C327.369 579.363 326.989 579.226 326.654 579.072C326.318 578.919 326.031 578.738 325.792 578.529C325.561 578.32 325.381 578.08 325.254 577.807C325.136 577.527 325.077 577.207 325.078 576.847C325.081 576.063 325.383 575.464 325.985 575.05C326.586 574.628 327.435 574.419 328.531 574.423C329.075 574.425 329.615 574.479 330.15 574.585C330.694 574.683 331.161 574.821 331.553 574.998L331.151 576.473C330.768 576.287 330.345 576.146 329.881 576.048C329.417 575.942 328.958 575.889 328.502 575.887C327.958 575.885 327.545 575.968 327.265 576.135C326.984 576.294 326.843 576.533 326.842 576.853C326.841 577.045 326.881 577.209 326.96 577.345C327.04 577.474 327.159 577.586 327.319 577.683C327.487 577.779 327.694 577.872 327.942 577.961C328.198 578.05 328.501 578.147 328.853 578.252C329.308 578.382 329.712 578.528 330.063 578.689C330.423 578.842 330.722 579.023 330.961 579.232C331.209 579.433 331.396 579.67 331.523 579.942C331.65 580.215 331.713 580.535 331.711 580.903C331.708 581.703 331.398 582.326 330.78 582.771C330.171 583.209 329.31 583.426 328.198 583.422ZM333.314 583.321L333.346 574.561L335.098 574.567L335.066 583.327L333.314 583.321ZM337.003 583.334L337.035 574.574L339.867 574.584C341.043 574.589 341.923 574.772 342.505 575.134C343.096 575.488 343.39 576.021 343.388 576.733C343.386 577.261 343.232 577.697 342.927 578.04C342.63 578.375 342.213 578.593 341.676 578.695L341.676 578.719C342.34 578.818 342.839 579.051 343.174 579.421C343.516 579.782 343.687 580.266 343.684 580.874C343.681 581.698 343.363 582.317 342.73 582.731C342.104 583.145 341.167 583.349 339.919 583.345L337.003 583.334ZM339.925 581.941C340.629 581.943 341.145 581.845 341.474 581.646C341.802 581.448 341.967 581.136 341.969 580.712C341.971 580.28 341.808 579.968 341.48 579.774C341.153 579.573 340.638 579.471 339.934 579.469L337.858 579.461L337.863 578.093L339.939 578.101C340.555 578.103 341.003 578.021 341.283 577.854C341.564 577.679 341.705 577.403 341.706 577.027C341.708 576.659 341.569 576.395 341.289 576.234C341.018 576.073 340.57 575.991 339.946 575.989L338.71 575.984L338.689 581.936L339.925 581.941ZM345.127 583.364L345.159 574.604L346.911 574.61L346.879 583.37L345.127 583.364ZM348.816 583.377L348.848 574.617L350.564 574.623L350.537 581.907L355.097 581.924L355.092 583.4L348.816 583.377ZM356.506 583.405L356.537 574.645L358.289 574.652L358.258 583.412L356.506 583.405ZM362.415 583.427L362.441 576.143L359.633 576.133L359.639 574.657L366.995 574.683L366.989 576.159L364.181 576.149L364.155 583.433L362.415 583.427ZM370.82 583.457L370.832 580.265L367.648 574.686L369.532 574.693L371.701 578.792L371.725 578.793L373.912 574.709L375.808 574.715L372.584 580.272L372.572 583.464L370.82 583.457Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M165.883 525.948L173.041 520.061L174.974 521.247L172.972 530.296L171.397 529.329L173.266 521.875L173.245 521.862L167.458 526.914L165.883 525.948ZM168.434 525.162L169.2 523.914L173.292 526.423L172.526 527.671L168.434 525.162ZM173.87 530.847L178.45 523.379L180.701 524.76C181.826 525.45 182.532 526.173 182.818 526.931C183.111 527.692 182.994 528.503 182.467 529.362C181.944 530.215 181.289 530.695 180.5 530.802C179.718 530.914 178.809 530.652 177.772 530.016L176.023 528.943L176.776 527.716L178.341 528.676C178.982 529.069 179.514 529.25 179.937 529.218C180.364 529.18 180.72 528.929 181.004 528.465C181.289 528.001 181.349 527.574 181.186 527.183C181.022 526.791 180.62 526.399 179.979 526.006L179.13 525.485L175.303 531.725L173.87 530.847ZM180.533 534.933L185.113 527.466L187.364 528.846C188.489 529.536 189.195 530.26 189.481 531.018C189.774 531.779 189.657 532.59 189.13 533.449C188.607 534.301 187.952 534.781 187.163 534.889C186.381 535.001 185.472 534.739 184.435 534.103L182.686 533.03L183.439 531.802L185.004 532.762C185.645 533.156 186.177 533.336 186.6 533.305C187.027 533.266 187.383 533.015 187.667 532.552C187.952 532.088 188.012 531.66 187.849 531.269C187.685 530.878 187.283 530.486 186.642 530.093L185.793 529.572L181.966 535.812L180.533 534.933ZM187.196 539.02L191.776 531.553L194.129 532.996C195.241 533.677 195.943 534.361 196.235 535.047C196.534 535.738 196.444 536.475 195.963 537.259C195.49 538.03 194.887 538.462 194.153 538.557C193.424 538.644 192.568 538.387 191.586 537.785L189.663 536.605L190.372 535.449L192.08 536.497C192.68 536.865 193.168 537.042 193.542 537.028C193.917 537.014 194.224 536.812 194.462 536.423C194.701 536.035 194.741 535.67 194.584 535.33C194.427 534.989 194.048 534.635 193.448 534.267L192.456 533.658L188.629 539.898L187.196 539.02ZM191.503 541.661L190.446 536.339L192.113 537.362L193.232 542.722L191.503 541.661ZM194.329 543.394L198.909 535.927L203.983 539.039L203.236 540.256L199.594 538.023L198.503 539.803L201.94 541.911L201.218 543.087L197.781 540.979L196.508 543.056L200.149 545.289L199.403 546.506L194.329 543.394ZM204.199 549.589C203.38 549.087 202.77 548.506 202.367 547.846C201.969 547.18 201.789 546.464 201.827 545.698C201.871 544.937 202.14 544.154 202.634 543.35C203.127 542.545 203.703 541.95 204.361 541.566C205.026 541.185 205.744 541.025 206.515 541.085C207.289 541.137 208.086 541.415 208.904 541.917C209.838 542.49 210.544 543.199 211.02 544.045L209.927 545.092C209.467 544.266 208.889 543.639 208.194 543.213C207.675 542.895 207.166 542.723 206.665 542.698C206.165 542.672 205.697 542.793 205.26 543.06C204.828 543.321 204.447 543.721 204.117 544.259C203.791 544.791 203.607 545.312 203.566 545.822C203.526 546.332 203.63 546.805 203.88 547.239C204.129 547.674 204.513 548.05 205.032 548.368C205.714 548.786 206.534 549.017 207.493 549.061L207.054 550.51C206.085 550.469 205.133 550.162 204.199 549.589ZM208.086 551.832L212.666 544.365L214.16 545.281L209.58 552.748L208.086 551.832ZM210.556 553.347L217.714 547.461L219.647 548.647L217.645 557.695L216.07 556.729L217.939 549.274L217.919 549.262L212.131 554.313L210.556 553.347ZM213.108 552.561L213.873 551.313L217.965 553.823L217.199 555.071L213.108 552.561ZM219.477 558.819L223.285 552.609L220.892 551.141L221.663 549.883L227.934 553.729L227.162 554.987L224.768 553.519L220.96 559.728L219.477 558.819ZM224.427 561.855L229.007 554.387L234.081 557.499L233.334 558.717L229.693 556.483L228.601 558.263L232.038 560.371L231.317 561.547L227.88 559.439L226.606 561.516L230.248 563.749L229.501 564.967L224.427 561.855Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M94.3746 492.045C93.6981 491.363 93.2425 490.655 93.0075 489.918C92.7782 489.176 92.7723 488.438 92.9899 487.704C93.2131 486.975 93.6597 486.278 94.3295 485.613C94.9994 484.947 95.6996 484.506 96.4301 484.288C97.1663 484.075 97.9016 484.089 98.6362 484.33C99.3764 484.564 100.085 485.022 100.761 485.703C101.533 486.481 102.051 487.337 102.313 488.271L101.004 489.03C100.753 488.119 100.339 487.373 99.7644 486.794C99.336 486.363 98.8817 486.076 98.4014 485.932C97.921 485.789 97.4373 485.796 96.9503 485.953C96.4689 486.104 96.004 486.402 95.5555 486.847C95.1127 487.287 94.8113 487.75 94.6511 488.236C94.491 488.722 94.4808 489.205 94.6205 489.686C94.7602 490.168 95.0443 490.624 95.4727 491.056C96.0363 491.623 96.7787 492.042 97.6999 492.311L96.9315 493.615C95.9991 493.346 95.1468 492.822 94.3746 492.045ZM100.046 497.756C99.3974 497.103 98.9615 496.409 98.7378 495.673C98.5199 494.931 98.5197 494.193 98.7372 493.458C98.9661 492.723 99.407 492.032 100.06 491.384C100.718 490.73 101.413 490.294 102.143 490.076C102.88 489.864 103.615 489.872 104.349 490.101C105.09 490.324 105.784 490.762 106.432 491.415C107.092 492.079 107.528 492.779 107.74 493.515C107.964 494.252 107.964 494.984 107.741 495.713C107.523 496.448 107.085 497.142 106.426 497.796C105.774 498.444 105.076 498.877 104.334 499.095C103.604 499.313 102.869 499.31 102.128 499.087C101.399 498.864 100.705 498.42 100.046 497.756ZM101.093 496.716C101.51 497.136 101.95 497.409 102.414 497.535C102.877 497.662 103.344 497.643 103.814 497.481C104.296 497.319 104.76 497.015 105.209 496.57C105.657 496.124 105.962 495.664 106.122 495.19C106.293 494.715 106.317 494.246 106.195 493.781C106.072 493.317 105.802 492.875 105.385 492.455C104.973 492.04 104.533 491.767 104.064 491.635C103.601 491.509 103.128 491.528 102.647 491.69C102.177 491.852 101.717 492.156 101.269 492.601C100.82 493.047 100.51 493.507 100.339 493.981C100.179 494.456 100.16 494.925 100.283 495.39C100.412 495.86 100.682 496.302 101.093 496.716ZM104.3 501.87L110.516 495.698L111.75 496.941L110.097 503.741L110.114 503.758L114.346 499.555L115.53 500.748L109.313 506.92L108.071 505.668L109.732 498.877L109.715 498.86L105.483 503.062L104.3 501.87ZM112.18 509.807L117.349 504.675L115.371 502.682L116.418 501.642L121.601 506.862L120.554 507.902L118.575 505.91L113.406 511.042L112.18 509.807ZM116.272 513.928L122.488 507.756L126.682 511.979L125.669 512.986L122.659 509.954L121.177 511.425L124.018 514.286L123.039 515.259L120.198 512.398L118.469 514.114L121.479 517.146L120.466 518.152L116.272 513.928ZM121.647 519.342L127.864 513.169L129.098 514.413L127.445 521.212L127.462 521.229L131.694 517.027L132.877 518.219L126.661 524.391L125.418 523.139L127.08 516.349L127.063 516.332L122.831 520.534L121.647 519.342ZM129.528 527.279L134.697 522.146L132.718 520.154L133.766 519.114L138.949 524.334L137.901 525.374L135.923 523.381L130.754 528.513L129.528 527.279ZM133.62 531.4L139.836 525.227L141.324 526.726L139.252 531.929L139.269 531.946L144.486 529.911L145.974 531.41L139.758 537.582L138.575 536.39L142.917 532.077L142.9 532.06L138.559 533.734L137.459 532.627L139.163 528.297L139.146 528.28L134.804 532.592L133.62 531.4ZM141.059 538.892L147.276 532.72L151.469 536.944L150.456 537.95L147.446 534.918L145.964 536.389L148.805 539.251L147.826 540.223L144.985 537.362L143.256 539.078L146.266 542.11L145.253 543.116L141.059 538.892ZM146.435 544.306L152.651 538.133L153.885 539.377L152.232 546.176L152.249 546.193L156.481 541.991L157.665 543.183L151.448 549.355L150.206 548.104L151.867 541.313L151.85 541.296L147.618 545.498L146.435 544.306ZM154.315 552.243L159.484 547.11L157.506 545.118L158.553 544.078L163.736 549.298L162.689 550.338L160.71 548.345L155.541 553.477L154.315 552.243Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M93.6386 431.009L101.247 426.667L102.615 429.065C103.261 430.197 103.547 431.135 103.474 431.877C103.404 432.626 102.969 433.229 102.17 433.684C101.385 434.132 100.648 434.221 99.9595 433.951C99.278 433.677 98.6518 433.039 98.0809 432.039L96.9628 430.079L98.1406 429.407L99.1338 431.148C99.4826 431.759 99.8247 432.149 100.16 432.317C100.495 432.485 100.861 432.456 101.257 432.23C101.653 432.004 101.864 431.704 101.89 431.33C101.916 430.956 101.755 430.463 101.406 429.851L100.829 428.84L94.4712 432.468L93.6386 431.009ZM96.1423 435.397L97.7769 430.223L98.7463 431.921L97.1473 437.158L96.1423 435.397ZM97.7852 438.276L105.394 433.935L108.344 439.105L107.103 439.812L104.986 436.102L103.173 437.137L105.171 440.639L103.972 441.322L101.974 437.82L99.8581 439.028L101.975 442.738L100.735 443.446L97.7852 438.276ZM101.173 444.214L110.281 442.5L111.405 444.47L105.295 451.437L104.379 449.832L109.605 444.198L109.593 444.177L102.089 445.82L101.173 444.214ZM103.788 444.753L105.06 444.028L107.439 448.197L106.167 448.923L103.788 444.753ZM105.817 452.353L113.426 448.012L114.276 449.502L107.949 453.112L110.209 457.073L108.927 457.804L105.817 452.353ZM109.628 459.032L117.237 454.691L118.105 456.212L110.496 460.554L109.628 459.032ZM112.556 464.164L118.883 460.555L117.491 458.116L118.773 457.384L122.419 463.773L121.137 464.505L119.745 462.066L113.419 465.676L112.556 464.164ZM116.722 471.465L119.495 469.883L122.743 464.341L123.677 465.978L121.205 469.902L121.217 469.923L125.847 469.782L126.787 471.429L120.363 471.405L117.59 472.987L116.722 471.465Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M582.153 378.553L574.875 378.265L574.763 381.071L573.289 381.012L573.58 373.662L575.055 373.72L574.944 376.526L582.222 376.815L582.153 378.553ZM582.307 374.666L573.674 371.297L573.764 369.031L582.637 366.357L582.563 368.203L575.146 370.215L575.145 370.239L582.38 372.82L582.307 374.666ZM580.375 372.824L578.912 372.766L579.102 367.97L580.565 368.028L580.375 372.824ZM582.678 365.303L573.925 364.956L573.992 363.278L577.781 363.428L577.782 363.404L574.134 359.68L574.215 357.642L578.256 361.741L582.973 357.869L582.892 359.908L578.597 363.436L578.596 363.46L582.745 363.625L582.678 365.303ZM583.018 356.732L574.265 356.385L574.501 350.438L575.928 350.494L575.759 354.763L577.845 354.846L578.005 350.817L579.384 350.871L579.224 354.9L581.658 354.997L581.827 350.728L583.254 350.785L583.018 356.732ZM583.682 343.017C583.659 343.609 583.576 344.186 583.433 344.749C583.283 345.311 583.092 345.776 582.862 346.143L581.402 345.701C581.549 345.435 581.684 345.14 581.809 344.817C581.926 344.493 582.024 344.161 582.101 343.819C582.171 343.478 582.212 343.155 582.224 342.851C582.245 342.324 582.169 341.917 581.996 341.629C581.823 341.342 581.561 341.192 581.209 341.178C581.017 341.17 580.856 341.208 580.724 341.291C580.585 341.373 580.464 341.501 580.361 341.673C580.25 341.844 580.145 342.064 580.046 342.333C579.948 342.601 579.843 342.917 579.733 343.281C579.596 343.7 579.445 344.074 579.28 344.404C579.115 344.734 578.923 345.014 578.706 345.246C578.489 345.47 578.242 345.64 577.965 345.757C577.681 345.866 577.358 345.913 576.999 345.899C576.215 345.868 575.628 345.544 575.236 344.928C574.836 344.312 574.658 343.456 574.701 342.361C574.723 341.817 574.796 341.28 574.921 340.748C575.039 340.209 575.193 339.746 575.384 339.362L576.844 339.816C576.645 340.192 576.488 340.61 576.374 341.07C576.251 341.53 576.181 341.987 576.163 342.443C576.141 342.987 576.209 343.402 576.366 343.688C576.515 343.974 576.749 344.124 577.069 344.136C577.26 344.144 577.426 344.11 577.565 344.036C577.696 343.961 577.813 343.845 577.915 343.689C578.018 343.525 578.118 343.321 578.216 343.077C578.314 342.825 578.422 342.525 578.539 342.177C578.685 341.726 578.845 341.328 579.019 340.983C579.185 340.629 579.377 340.337 579.594 340.105C579.804 339.865 580.047 339.687 580.324 339.57C580.601 339.453 580.923 339.401 581.291 339.416C582.09 339.448 582.702 339.78 583.125 340.413C583.54 341.038 583.726 341.906 583.682 343.017ZM583.761 337.997L575.008 337.65L575.244 331.702L576.671 331.759L576.501 336.028L578.588 336.11L578.748 332.081L580.127 332.136L579.967 336.165L582.401 336.261L582.57 331.993L583.997 332.049L583.761 337.997ZM584.063 330.374L575.31 330.027L575.42 327.269C575.471 325.966 575.725 325.019 576.181 324.429C576.637 323.83 577.325 323.549 578.244 323.586C579.147 323.622 579.819 323.937 580.26 324.531C580.693 325.124 580.886 325.997 580.841 327.148L580.751 329.402L579.396 329.348L579.476 327.346C579.504 326.642 579.42 326.131 579.224 325.811C579.029 325.491 578.703 325.321 578.248 325.303C577.792 325.285 577.454 325.428 577.234 325.732C577.014 326.035 576.89 326.539 576.862 327.242L576.816 328.405L584.13 328.695L584.063 330.374ZM584.264 325.326L580.137 328.849L580.214 326.895L584.344 323.299L584.264 325.326ZM584.399 321.917L575.646 321.57L575.715 319.82L584.468 320.167L584.399 321.917ZM584.826 314.183C584.789 315.102 584.578 315.894 584.191 316.56C583.796 317.225 583.256 317.728 582.57 318.069C581.876 318.401 581.07 318.55 580.15 318.513C579.223 318.476 578.431 318.265 577.774 317.878C577.117 317.484 576.622 316.94 576.289 316.246C575.948 315.552 575.796 314.746 575.833 313.826C575.87 312.891 576.085 312.095 576.48 311.438C576.866 310.773 577.403 310.274 578.088 309.941C578.774 309.6 579.581 309.447 580.508 309.484C581.428 309.521 582.22 309.736 582.885 310.131C583.542 310.517 584.041 311.057 584.382 311.751C584.715 312.437 584.863 313.248 584.826 314.183ZM583.351 314.124C583.374 313.533 583.274 313.025 583.051 312.599C582.828 312.174 582.496 311.845 582.057 311.611C581.611 311.369 581.071 311.236 580.44 311.211C579.808 311.186 579.264 311.276 578.808 311.482C578.344 311.68 577.983 311.982 577.727 312.388C577.471 312.794 577.331 313.293 577.307 313.885C577.284 314.468 577.384 314.977 577.607 315.41C577.831 315.835 578.166 316.169 578.612 316.411C579.052 316.644 579.587 316.773 580.218 316.798C580.85 316.824 581.398 316.737 581.862 316.539C582.318 316.333 582.675 316.027 582.931 315.621C583.188 315.207 583.328 314.708 583.351 314.124ZM585.197 304.806C585.151 305.973 584.848 306.849 584.289 307.436C583.729 308.014 582.934 308.283 581.903 308.242L576.183 308.015L576.25 306.336L581.646 306.55C582.357 306.579 582.874 306.455 583.197 306.18C583.521 305.896 583.696 305.419 583.723 304.747C583.749 304.076 583.612 303.59 583.312 303.29C583.012 302.982 582.506 302.813 581.795 302.785L576.399 302.571L576.466 300.893L582.185 301.119C583.216 301.16 583.988 301.491 584.5 302.112C585.011 302.733 585.244 303.631 585.197 304.806ZM585.518 296.73C585.494 297.321 585.411 297.898 585.269 298.461C585.118 299.024 584.928 299.488 584.697 299.856L583.238 299.413C583.384 299.147 583.52 298.852 583.645 298.529C583.762 298.205 583.859 297.873 583.937 297.532C584.006 297.19 584.047 296.867 584.059 296.564C584.08 296.036 584.004 295.629 583.831 295.342C583.659 295.055 583.396 294.904 583.045 294.89C582.853 294.883 582.691 294.92 582.56 295.003C582.42 295.086 582.299 295.213 582.196 295.385C582.085 295.557 581.981 295.777 581.882 296.045C581.783 296.313 581.679 296.629 581.568 296.993C581.431 297.412 581.28 297.786 581.115 298.116C580.95 298.446 580.759 298.727 580.541 298.958C580.324 299.182 580.078 299.352 579.801 299.469C579.516 299.578 579.194 299.625 578.834 299.611C578.051 299.58 577.463 299.256 577.071 298.64C576.671 298.024 576.493 297.168 576.537 296.073C576.558 295.53 576.632 294.992 576.757 294.461C576.874 293.921 577.029 293.459 577.22 293.074L578.679 293.528C578.48 293.904 578.323 294.323 578.209 294.782C578.087 295.242 578.017 295.7 577.999 296.155C577.977 296.699 578.045 297.114 578.201 297.4C578.35 297.686 578.584 297.836 578.904 297.848C579.096 297.856 579.261 297.823 579.401 297.748C579.532 297.673 579.648 297.558 579.751 297.402C579.853 297.238 579.953 297.033 580.051 296.789C580.149 296.537 580.257 296.237 580.375 295.889C580.521 295.439 580.681 295.041 580.855 294.695C581.021 294.342 581.213 294.049 581.43 293.817C581.64 293.577 581.883 293.399 582.16 293.282C582.437 293.165 582.759 293.113 583.127 293.128C583.926 293.16 584.537 293.492 584.96 294.125C585.376 294.75 585.562 295.618 585.518 296.73ZM585.597 291.709L576.844 291.362L576.912 289.647L584.19 289.936L584.371 285.379L585.845 285.438L585.597 291.709ZM585.918 283.597L582.729 283.471L577.038 286.452L577.113 284.569L581.288 282.549L581.289 282.525L577.286 280.193L577.362 278.298L582.798 281.72L585.988 281.847L585.918 283.597Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M81.7661 368.992L73.0065 369.069L72.9916 367.389L81.7512 367.312L81.7661 368.992ZM81.8125 374.223L73.0529 374.301L73.038 372.621L81.7976 372.544L81.8125 374.223ZM77.9892 373.417L76.5133 373.43L76.4669 368.199L77.9428 368.186L77.9892 373.417ZM81.8188 361.401C81.8269 362.321 81.654 363.123 81.3001 363.806C80.9381 364.489 80.4228 365.018 79.7541 365.392C79.0773 365.758 78.2789 365.945 77.359 365.953C76.431 365.961 75.6295 365.788 74.9543 365.434C74.279 365.072 73.7584 364.553 73.3924 363.876C73.0184 363.199 72.8273 362.401 72.8191 361.481C72.8108 360.545 72.9877 359.74 73.3497 359.064C73.7037 358.381 74.215 357.857 74.8838 357.491C75.5525 357.117 76.3508 356.926 77.2788 356.917C78.1988 356.909 79.0004 357.086 79.6836 357.448C80.3588 357.802 80.8834 358.317 81.2574 358.994C81.6233 359.663 81.8105 360.465 81.8188 361.401ZM80.3428 361.414C80.3376 360.822 80.2131 360.319 79.9694 359.906C79.7257 359.492 79.379 359.179 78.9291 358.967C78.4711 358.747 77.9261 358.64 77.2941 358.645C76.6622 358.651 76.1232 358.768 75.6772 358.996C75.2231 359.216 74.8779 359.535 74.6416 359.953C74.4053 360.371 74.2898 360.876 74.2951 361.468C74.3003 362.052 74.4247 362.555 74.6685 362.977C74.9122 363.391 75.263 363.708 75.7209 363.927C76.1708 364.139 76.7118 364.243 77.3438 364.237C77.9757 364.231 78.5188 364.119 78.9728 363.899C79.4188 363.671 79.76 363.348 79.9963 362.93C80.2325 362.503 80.348 361.998 80.3428 361.414ZM81.6463 355.486L72.8866 355.564L72.8714 353.848L80.1551 353.783L80.1147 349.223L81.5906 349.21L81.6463 355.486ZM81.5789 347.892L72.8192 347.97L72.7963 345.378C72.7825 343.826 73.1284 342.683 73.8339 341.949C74.5393 341.207 75.64 340.829 77.1359 340.816C78.6319 340.802 79.7391 341.161 80.4576 341.89C81.176 342.612 81.5421 343.749 81.5559 345.301L81.5789 347.892ZM80.115 345.205C80.1093 344.557 80.0086 344.038 79.8132 343.648C79.6097 343.258 79.2912 342.973 78.8575 342.792C78.4239 342.612 77.8551 342.525 77.1512 342.532C76.4392 342.538 75.872 342.635 75.4497 342.823C75.0193 343.01 74.7099 343.301 74.5214 343.695C74.3249 344.089 74.2295 344.61 74.2352 345.258L74.2443 346.277L80.1241 346.225L80.115 345.205ZM81.5034 339.385L72.7438 339.463L72.7285 337.747L80.0122 337.682L79.9718 333.122L81.4477 333.109L81.5034 339.385ZM81.4352 331.696L72.6755 331.773L72.66 330.021L81.4196 329.944L81.4352 331.696ZM81.484 323.674C81.4929 324.674 81.3205 325.535 80.9669 326.258C80.6133 326.973 80.1021 327.526 79.4336 327.916C78.7649 328.298 77.9626 328.493 77.0267 328.501C76.0907 328.51 75.2851 328.329 74.6098 327.959C73.9345 327.589 73.4137 327.057 73.0476 326.365C72.6813 325.664 72.4939 324.825 72.4852 323.849C72.4805 323.314 72.536 322.805 72.6517 322.324C72.7594 321.843 72.9236 321.413 73.1443 321.036L74.5515 321.395C74.3544 321.725 74.2058 322.106 74.1057 322.539C73.9975 322.972 73.9453 323.405 73.9492 323.836C73.9546 324.452 74.0793 324.975 74.3231 325.405C74.5589 325.835 74.9059 326.164 75.3639 326.392C75.8139 326.62 76.3629 326.731 77.0109 326.725C77.6589 326.72 78.2098 326.599 78.6638 326.363C79.1097 326.127 79.4507 325.784 79.6867 325.334C79.9147 324.884 80.0258 324.335 80.0201 323.687C80.0172 323.359 79.9824 323.047 79.9158 322.752C79.8491 322.456 79.7507 322.185 79.6205 321.938L80.1265 322.162L77.6066 322.184L77.6296 324.776L76.2257 324.788L76.1878 320.516L80.7596 320.476C80.9874 320.898 81.1638 321.392 81.2888 321.959C81.4138 322.526 81.4789 323.098 81.484 323.674ZM81.2741 313.541L72.5144 313.618L72.4995 311.939L81.2592 311.861L81.2741 313.541ZM81.3205 318.773L72.5609 318.85L72.546 317.17L81.3056 317.093L81.3205 318.773ZM77.4972 317.966L76.0213 317.979L75.9749 312.748L77.4508 312.735L77.4972 317.966ZM81.2231 307.787L73.9393 307.852L73.9643 310.66L72.4883 310.673L72.423 303.317L73.899 303.304L73.9239 306.112L81.2076 306.047L81.2231 307.787ZM81.1715 301.98L72.4119 302.058L72.3966 300.342L79.6804 300.277L79.6399 295.718L81.1158 295.704L81.1715 301.98ZM81.0995 293.863L77.9076 293.891L72.3683 297.144L72.3516 295.26L76.424 293.04L76.4238 293.016L72.3127 290.88L72.2959 288.985L77.8921 292.139L81.084 292.111L81.0995 293.863Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M52.9419 286.346C52.694 287.274 52.3112 288.024 51.7935 288.598C51.2681 289.17 50.6333 289.547 49.889 289.729C49.1469 289.903 48.3198 289.868 47.4078 289.624C46.4958 289.381 45.7617 288.998 45.2054 288.477C44.6512 287.948 44.2929 287.306 44.1305 286.55C43.9604 285.792 43.9992 284.95 44.2471 284.022C44.5301 282.964 45.009 282.085 45.684 281.388L46.9992 282.137C46.3382 282.813 45.9023 283.546 45.6916 284.334C45.5346 284.921 45.5153 285.459 45.6335 285.946C45.7518 286.433 46.0012 286.847 46.3819 287.189C46.7548 287.529 47.2465 287.78 47.8571 287.943C48.4599 288.105 49.0116 288.132 49.512 288.026C50.0124 287.919 50.4354 287.684 50.7809 287.321C51.1263 286.958 51.3776 286.483 51.5345 285.896C51.7411 285.123 51.7287 284.271 51.4973 283.339L53.0108 283.346C53.2479 284.287 53.2249 285.287 52.9419 286.346ZM55.0201 278.57C54.7826 279.459 54.4021 280.186 53.8788 280.75C53.3477 281.311 52.71 281.683 51.9658 281.865C51.2159 282.038 50.3965 282.005 49.5077 281.767C48.6112 281.528 47.8848 281.147 47.3285 280.626C46.7743 280.097 46.4111 279.458 46.2389 278.708C46.059 277.956 46.0878 277.135 46.3253 276.247C46.567 275.342 46.9523 274.613 47.4814 274.059C48.0048 273.495 48.6375 273.126 49.3797 272.951C50.1239 272.769 50.9443 272.798 51.8408 273.038C52.7296 273.275 53.455 273.66 54.0169 274.191C54.5732 274.712 54.9413 275.349 55.1212 276.101C55.2955 276.843 55.2618 277.666 55.0201 278.57ZM53.5942 278.189C53.747 277.617 53.7612 277.099 53.6368 276.636C53.5123 276.172 53.2616 275.778 52.8846 275.453C52.5019 275.119 52.0052 274.87 51.3947 274.707C50.7841 274.544 50.2335 274.513 49.7428 274.614C49.2465 274.704 48.8287 274.92 48.4895 275.26C48.1502 275.6 47.9041 276.056 47.7513 276.628C47.6005 277.192 47.5863 277.71 47.7087 278.181C47.8331 278.645 48.0867 279.044 48.4694 279.378C48.8464 279.703 49.3402 279.946 49.9508 280.11C50.5614 280.273 51.1148 280.309 51.6111 280.218C52.1018 280.117 52.5167 279.897 52.856 279.557C53.1973 279.209 53.4434 278.753 53.5942 278.189ZM56.4319 272.823L47.9689 270.561L48.5143 268.521L54.0524 267.691L54.0586 267.668L49.6731 264.185L50.2184 262.145L58.6814 264.407L58.2476 266.03L52.3351 264.45L52.3289 264.473L55.9611 267.381L55.5583 268.888L50.9594 269.597L50.9532 269.62L56.8657 271.2L56.4319 272.823ZM59.1582 262.623L50.6952 260.361L51.3769 257.81C51.7177 256.535 52.2103 255.652 52.8547 255.162C53.5012 254.664 54.3114 254.545 55.2852 254.806C56.2513 255.064 56.8983 255.556 57.2261 256.281C57.5561 256.998 57.564 257.945 57.2501 259.119L56.7202 261.102L55.3291 260.73L55.8031 258.956C55.9973 258.23 56.019 257.668 55.8682 257.272C55.7097 256.873 55.3677 256.604 54.8421 256.464C54.3166 256.323 53.8896 256.387 53.5612 256.655C53.2328 256.924 52.9715 257.421 52.7773 258.147L52.5202 259.11L59.5919 261L59.1582 262.623ZM60.7056 256.833L53.0235 251.65L53.6091 249.458L62.8528 248.799L62.3757 250.584L54.6974 250.917L54.6912 250.94L61.1828 255.047L60.7056 256.833ZM59.225 254.611L57.8107 254.233L59.05 249.596L60.4644 249.974L59.225 254.611ZM63.957 245.132C63.8041 245.704 63.5964 246.249 63.3338 246.767C63.0635 247.283 62.7754 247.694 62.4697 248.002L61.1429 247.25C61.3445 247.022 61.5418 246.764 61.7346 246.476C61.9198 246.186 62.0877 245.883 62.2384 245.567C62.3813 245.249 62.492 244.944 62.5705 244.65C62.7068 244.14 62.7223 243.726 62.6168 243.408C62.5113 243.09 62.2886 242.885 61.9485 242.794C61.763 242.745 61.5971 242.746 61.4507 242.798C61.2966 242.848 61.1504 242.946 61.0122 243.091C60.8663 243.234 60.7157 243.426 60.5605 243.666C60.4053 243.906 60.2337 244.191 60.046 244.522C59.8206 244.9 59.5911 245.232 59.3575 245.518C59.1239 245.803 58.8756 246.035 58.6127 246.213C58.3518 246.384 58.0735 246.495 57.7777 246.549C57.4762 246.592 57.1515 246.568 56.8038 246.475C56.0463 246.272 55.5441 245.828 55.2972 245.141C55.0425 244.452 55.0566 243.578 55.3396 242.519C55.4801 241.993 55.6697 241.485 55.9086 240.994C56.1418 240.493 56.394 240.076 56.6653 239.743L57.989 240.507C57.7121 240.83 57.4673 241.203 57.2548 241.627C57.0345 242.048 56.8655 242.479 56.7478 242.92C56.6073 243.445 56.5821 243.865 56.6721 244.179C56.7544 244.491 56.9501 244.688 57.2592 244.771C57.4447 244.82 57.6135 244.824 57.7655 244.782C57.9098 244.738 58.049 244.651 58.1831 244.521C58.3192 244.383 58.4618 244.206 58.6108 243.989C58.762 243.765 58.9332 243.496 59.1246 243.182C59.366 242.775 59.6094 242.422 59.8549 242.123C60.0946 241.815 60.346 241.571 60.6089 241.393C60.8662 241.205 61.1427 241.084 61.4385 241.031C61.7344 240.978 62.06 240.998 62.4156 241.093C63.1884 241.3 63.7118 241.759 63.9855 242.469C64.2536 243.17 64.2441 244.058 63.957 245.132ZM65.9358 237.728C65.783 238.3 65.5753 238.845 65.3127 239.363C65.0424 239.878 64.7543 240.29 64.4486 240.597L63.1218 239.845C63.3234 239.618 63.5206 239.36 63.7135 239.072C63.8987 238.782 64.0666 238.479 64.2172 238.163C64.3602 237.845 64.4709 237.54 64.5494 237.246C64.6857 236.736 64.7011 236.322 64.5957 236.004C64.4902 235.686 64.2674 235.481 63.9274 235.39C63.7419 235.341 63.576 235.342 63.4296 235.394C63.2755 235.444 63.1293 235.541 62.9911 235.687C62.8452 235.83 62.6946 236.021 62.5394 236.261C62.3841 236.501 62.2126 236.787 62.0249 237.118C61.7995 237.496 61.57 237.828 61.3364 238.114C61.1027 238.399 60.8545 238.631 60.5916 238.809C60.3307 238.979 60.0524 239.091 59.7566 239.145C59.4551 239.188 59.1304 239.164 58.7826 239.071C58.0252 238.868 57.523 238.424 57.2761 237.736C57.0214 237.047 57.0355 236.173 57.3185 235.115C57.459 234.589 57.6486 234.081 57.8875 233.59C58.1207 233.089 58.3729 232.672 58.6442 232.339L59.9679 233.102C59.691 233.426 59.4462 233.799 59.2337 234.223C59.0134 234.644 58.8444 235.075 58.7266 235.516C58.5862 236.041 58.561 236.461 58.651 236.775C58.7332 237.087 58.929 237.284 59.2381 237.367C59.4236 237.416 59.5924 237.42 59.7444 237.378C59.8887 237.333 60.0279 237.246 60.162 237.117C60.2981 236.979 60.4407 236.802 60.5897 236.585C60.7408 236.36 60.9121 236.092 61.1034 235.778C61.3448 235.371 61.5883 235.018 61.8337 234.719C62.0735 234.41 62.3249 234.167 62.5878 233.989C62.8451 233.801 63.1216 233.68 63.4174 233.627C63.7133 233.573 64.0389 233.594 64.3944 233.689C65.1673 233.896 65.6906 234.354 65.9644 235.065C66.2325 235.766 66.223 236.654 65.9358 237.728ZM67.1408 232.755L58.6779 230.493L59.1303 228.8L67.5932 231.062L67.1408 232.755ZM69.2566 225.303C69.019 226.192 68.6386 226.918 68.1152 227.482C67.5841 228.044 66.9465 228.416 66.2022 228.598C65.4523 228.771 64.633 228.738 63.7442 228.5C62.8476 228.261 62.1212 227.88 61.565 227.359C61.0108 226.83 60.6476 226.19 60.4754 225.441C60.2954 224.689 60.3242 223.868 60.5618 222.979C60.8035 222.075 61.1888 221.346 61.7178 220.792C62.2412 220.228 62.874 219.859 63.6161 219.684C64.3604 219.502 65.1808 219.531 66.0773 219.771C66.9661 220.008 67.6915 220.393 68.2534 220.924C68.8096 221.445 69.1777 222.082 69.3577 222.834C69.532 223.576 69.4983 224.399 69.2566 225.303ZM67.8306 224.922C67.9835 224.35 67.9977 223.832 67.8733 223.368C67.7488 222.905 67.4981 222.511 67.121 222.186C66.7383 221.852 66.2417 221.603 65.6311 221.44C65.0206 221.277 64.4699 221.246 63.9793 221.346C63.483 221.437 63.0652 221.653 62.7259 221.993C62.3866 222.333 62.1406 222.789 61.9877 223.361C61.8369 223.925 61.8227 224.443 61.9451 224.914C62.0696 225.378 62.3231 225.777 62.7058 226.111C63.0829 226.436 63.5767 226.679 64.1872 226.843C64.7978 227.006 65.3513 227.042 65.8476 226.951C66.3382 226.85 66.7532 226.63 67.0924 226.29C67.4338 225.942 67.6799 225.486 67.8306 224.922ZM70.6684 219.556L62.2054 217.294L62.6578 215.602L69.3646 213.606L69.3708 213.583L63.609 212.043L64.0428 210.42L72.5057 212.682L72.0503 214.386L65.3466 216.37L65.3404 216.393L71.1021 217.933L70.6684 219.556Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M408.662 85.3125L415.557 79.1208L417.54 80.2215L415.933 89.3483L414.317 88.4515L415.861 80.9226L415.84 80.911L410.277 86.2094L408.662 85.3125ZM411.177 84.4164L411.887 83.1364L416.084 85.4658L415.373 86.7459L411.177 84.4164ZM418.906 91.1359C418.388 90.8486 417.91 90.5147 417.472 90.1341C417.038 89.7465 416.708 89.3671 416.484 88.9957L417.536 87.8916C417.708 88.1425 417.91 88.3965 418.143 88.6536C418.379 88.9037 418.632 89.1402 418.902 89.3631C419.175 89.579 419.445 89.7608 419.711 89.9083C420.173 90.1645 420.571 90.2802 420.905 90.2552C421.239 90.2302 421.491 90.0638 421.662 89.756C421.755 89.5881 421.794 89.4269 421.78 89.2723C421.769 89.1107 421.71 88.9452 421.602 88.7758C421.499 88.5995 421.35 88.4068 421.154 88.1979C420.959 87.9889 420.724 87.7532 420.449 87.4907C420.137 87.18 419.87 86.8767 419.65 86.5807C419.43 86.2847 419.266 85.9876 419.157 85.6892C419.055 85.3948 419.014 85.0976 419.034 84.7976C419.065 84.4946 419.168 84.1857 419.343 83.8709C419.723 83.1854 420.277 82.8064 421.003 82.7339C421.734 82.6543 422.578 82.8805 423.536 83.4124C424.012 83.6764 424.459 83.984 424.877 84.335C425.306 84.683 425.649 85.029 425.906 85.3731L424.844 86.4715C424.597 86.1242 424.295 85.796 423.936 85.4869C423.58 85.1708 423.203 84.9021 422.805 84.6808C422.329 84.4168 421.928 84.2903 421.602 84.3013C421.279 84.3053 421.04 84.4472 420.885 84.727C420.792 84.8949 420.747 85.0577 420.751 85.2154C420.759 85.3662 420.81 85.5223 420.903 85.6839C421.003 85.8494 421.14 86.0308 421.315 86.2281C421.496 86.4292 421.715 86.6607 421.972 86.9225C422.309 87.2557 422.592 87.5777 422.822 87.8884C423.063 88.196 423.238 88.499 423.347 88.7973C423.467 89.0925 423.517 89.3901 423.497 89.69C423.477 89.99 423.377 90.3008 423.199 90.6226C422.81 91.3221 422.238 91.7182 421.482 91.8109C420.737 91.9006 419.878 91.6756 418.906 91.1359ZM425.292 94.6806C424.775 94.3933 424.297 94.0594 423.858 93.6788C423.424 93.2912 423.095 92.9118 422.871 92.5405L423.923 91.4363C424.095 91.6872 424.297 91.9412 424.529 92.1983C424.765 92.4484 425.018 92.6849 425.288 92.9078C425.562 93.1237 425.831 93.3055 426.097 93.453C426.559 93.7092 426.957 93.8249 427.291 93.7999C427.625 93.7749 427.877 93.6085 428.048 93.3007C428.141 93.1329 428.181 92.9716 428.166 92.817C428.155 92.6554 428.096 92.4899 427.988 92.3205C427.885 92.1442 427.736 91.9515 427.541 91.7426C427.346 91.5336 427.11 91.2979 426.835 91.0354C426.523 90.7247 426.257 90.4214 426.037 90.1254C425.817 89.8294 425.652 89.5323 425.543 89.2339C425.441 88.9395 425.4 88.6423 425.42 88.3424C425.451 88.0393 425.554 87.7304 425.729 87.4156C426.109 86.7301 426.663 86.3511 427.389 86.2786C428.12 86.199 428.964 86.4252 429.922 86.9571C430.398 87.2211 430.845 87.5287 431.263 87.8797C431.692 88.2277 432.035 88.5737 432.293 88.9178L431.23 90.0162C430.984 89.6689 430.681 89.3408 430.322 89.0316C429.967 88.7155 429.59 88.4468 429.191 88.2255C428.715 87.9615 428.314 87.835 427.988 87.846C427.665 87.85 427.427 87.9919 427.271 88.2717C427.178 88.4396 427.133 88.6024 427.137 88.7601C427.145 88.9109 427.196 89.067 427.289 89.2286C427.389 89.3941 427.527 89.5755 427.701 89.7728C427.882 89.9739 428.101 90.2054 428.358 90.4672C428.695 90.8004 428.978 91.1224 429.208 91.4331C429.449 91.7407 429.624 92.0437 429.733 92.342C429.853 92.6372 429.903 92.9348 429.883 93.2348C429.863 93.5347 429.763 93.8455 429.585 94.1673C429.197 94.8668 428.624 95.2629 427.868 95.3557C427.123 95.4453 426.265 95.2203 425.292 94.6806ZM432.348 98.5967C431.326 98.0299 430.68 97.3646 430.409 96.6009C430.144 95.841 430.262 95.01 430.763 94.1076L433.541 89.1029L435.01 89.9182L432.389 94.6397C432.044 95.2622 431.921 95.7797 432.022 96.1923C432.129 96.6087 432.476 96.98 433.064 97.3062C433.652 97.6323 434.147 97.7288 434.55 97.5958C434.96 97.4667 435.338 97.0908 435.684 96.4683L438.304 91.7468L439.773 92.5622L436.995 97.5669C436.495 98.4692 435.852 99.0091 435.067 99.1866C434.282 99.364 433.376 99.1674 432.348 98.5967ZM436.744 100.899L440.995 93.2402L443.408 94.5796C444.548 95.2124 445.279 95.8653 445.601 96.538C445.93 97.2147 445.871 97.9552 445.425 98.7596C444.986 99.55 444.402 100.008 443.674 100.134C442.949 100.254 442.083 100.034 441.075 99.4746L439.103 98.3798L439.761 97.1942L441.513 98.1667C442.129 98.5084 442.623 98.664 442.997 98.6335C443.371 98.6031 443.668 98.3885 443.89 97.9898C444.111 97.5911 444.136 97.2251 443.964 96.8918C443.792 96.5585 443.398 96.2211 442.783 95.8794L441.765 95.3145L438.212 101.715L436.744 100.899ZM441.161 103.351L439.873 98.0799L441.583 99.0292L442.934 104.335L441.161 103.351ZM443.745 104.785L447.996 97.1261L453.2 100.015L452.507 101.263L448.772 99.19L447.758 101.016L451.284 102.972L450.614 104.179L447.089 102.222L445.906 104.352L449.642 106.425L448.949 107.674L443.745 104.785ZM450.1 108.313L454.351 100.654L456.618 101.912C457.975 102.665 458.799 103.529 459.09 104.505C459.388 105.485 459.174 106.629 458.448 107.937C457.722 109.245 456.864 110.032 455.875 110.297C454.893 110.566 453.723 110.324 452.366 109.571L450.1 108.313ZM453.16 108.364C453.726 108.679 454.227 108.847 454.663 108.87C455.103 108.885 455.508 108.748 455.879 108.46C456.249 108.172 456.606 107.72 456.947 107.104C457.293 106.481 457.488 105.94 457.533 105.48C457.582 105.013 457.481 104.601 457.232 104.243C456.986 103.877 456.58 103.538 456.013 103.223L455.121 102.728L452.268 107.869L453.16 108.364ZM457.224 112.267L461.475 104.608L463.007 105.458L463.313 112.449L463.334 112.461L466.228 107.246L467.697 108.061L463.446 115.721L461.904 114.865L461.608 107.88L461.587 107.868L458.693 113.083L457.224 112.267ZM464.748 116.443L468.999 108.784L474.203 111.672L473.51 112.921L469.775 110.848L468.762 112.673L472.287 114.63L471.617 115.837L468.092 113.88L466.91 116.01L470.645 118.083L469.952 119.332L464.748 116.443ZM473.408 121.387C472.891 121.1 472.413 120.766 471.974 120.386C471.54 119.998 471.21 119.619 470.987 119.247L472.039 118.143C472.21 118.394 472.413 118.648 472.645 118.905C472.881 119.155 473.134 119.392 473.404 119.615C473.678 119.831 473.947 120.012 474.213 120.16C474.675 120.416 475.073 120.532 475.407 120.507C475.741 120.482 475.993 120.315 476.164 120.008C476.257 119.84 476.297 119.678 476.282 119.524C476.271 119.362 476.212 119.197 476.104 119.027C476.001 118.851 475.852 118.658 475.657 118.449C475.461 118.24 475.226 118.005 474.951 117.742C474.639 117.432 474.372 117.128 474.152 116.832C473.932 116.536 473.768 116.239 473.659 115.941C473.557 115.646 473.516 115.349 473.536 115.049C473.567 114.746 473.67 114.437 473.845 114.122C474.225 113.437 474.779 113.058 475.505 112.985C476.236 112.906 477.08 113.132 478.038 113.664C478.514 113.928 478.961 114.235 479.379 114.587C479.808 114.934 480.151 115.281 480.409 115.625L479.346 116.723C479.1 116.376 478.797 116.048 478.438 115.738C478.082 115.422 477.705 115.154 477.307 114.932C476.831 114.668 476.43 114.542 476.104 114.553C475.781 114.557 475.542 114.699 475.387 114.979C475.294 115.146 475.249 115.309 475.253 115.467C475.261 115.618 475.312 115.774 475.405 115.935C475.505 116.101 475.642 116.282 475.817 116.48C475.998 116.681 476.217 116.912 476.474 117.174C476.811 117.507 477.094 117.829 477.324 118.14C477.565 118.448 477.74 118.75 477.849 119.049C477.969 119.344 478.019 119.642 477.999 119.942C477.979 120.242 477.879 120.552 477.701 120.874C477.312 121.574 476.74 121.97 475.984 122.062C475.239 122.152 474.38 121.927 473.408 121.387ZM479.794 124.932C479.277 124.645 478.799 124.311 478.36 123.93C477.926 123.543 477.597 123.163 477.373 122.792L478.425 121.688C478.597 121.939 478.799 122.193 479.031 122.45C479.268 122.7 479.521 122.936 479.79 123.159C480.064 123.375 480.334 123.557 480.599 123.705C481.061 123.961 481.459 124.076 481.793 124.051C482.127 124.026 482.38 123.86 482.55 123.552C482.644 123.384 482.683 123.223 482.668 123.069C482.657 122.907 482.598 122.741 482.491 122.572C482.387 122.396 482.238 122.203 482.043 121.994C481.848 121.785 481.613 121.549 481.337 121.287C481.025 120.976 480.759 120.673 480.539 120.377C480.319 120.081 480.154 119.784 480.045 119.485C479.943 119.191 479.902 118.894 479.923 118.594C479.953 118.291 480.056 117.982 480.231 117.667C480.612 116.982 481.165 116.603 481.892 116.53C482.622 116.451 483.466 116.677 484.424 117.209C484.9 117.473 485.347 117.78 485.765 118.131C486.194 118.479 486.537 118.825 486.795 119.169L485.732 120.268C485.486 119.92 485.183 119.592 484.824 119.283C484.469 118.967 484.092 118.698 483.693 118.477C483.217 118.213 482.816 118.087 482.49 118.098C482.168 118.102 481.929 118.243 481.773 118.523C481.68 118.691 481.636 118.854 481.64 119.012C481.647 119.162 481.698 119.319 481.791 119.48C481.892 119.646 482.029 119.827 482.203 120.024C482.384 120.225 482.603 120.457 482.861 120.719C483.197 121.052 483.48 121.374 483.711 121.685C483.952 121.992 484.127 122.295 484.235 122.594C484.355 122.889 484.405 123.186 484.385 123.486C484.365 123.786 484.266 124.097 484.087 124.419C483.699 125.118 483.127 125.514 482.371 125.607C481.625 125.697 480.767 125.472 479.794 124.932Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M311.393 78.6709C310.474 78.7068 309.668 78.5582 308.974 78.225C308.28 77.8839 307.736 77.3847 307.342 76.7276C306.956 76.0622 306.745 75.2698 306.709 74.3505C306.673 73.4232 306.821 72.6168 307.155 71.9313C307.496 71.2454 308 70.7093 308.665 70.3231C309.33 69.9288 310.123 69.7137 311.042 69.6778C311.977 69.6412 312.788 69.7937 313.474 70.1352C314.167 70.4684 314.707 70.9637 315.093 71.6211C315.487 72.2782 315.702 73.0704 315.738 73.9977C315.774 74.917 315.621 75.7236 315.28 76.4174C314.947 77.103 314.447 77.6429 313.782 78.0371C313.125 78.4231 312.329 78.6344 311.393 78.6709ZM311.336 77.196C311.927 77.1729 312.426 77.0333 312.832 76.7773C313.239 76.5212 313.541 76.1651 313.739 75.7091C313.945 75.2447 314.036 74.6967 314.011 74.0652C313.987 73.4337 313.854 72.8984 313.612 72.4595C313.379 72.0123 313.049 71.6769 312.624 71.4533C312.199 71.2298 311.691 71.1295 311.099 71.1527C310.516 71.1755 310.017 71.315 309.603 71.5714C309.196 71.8275 308.89 72.1877 308.684 72.6521C308.486 73.1082 308.399 73.652 308.424 74.2835C308.448 74.915 308.578 75.4544 308.811 75.9016C309.052 76.3405 309.386 76.6718 309.811 76.8954C310.244 77.1186 310.752 77.2188 311.336 77.196ZM318.515 78.2725L318.231 70.9941L315.425 71.1037L315.367 69.6288L322.718 69.3416L322.775 70.8165L319.97 70.9261L320.254 78.2046L318.515 78.2725ZM329.186 77.8555L328.844 69.1022L330.523 69.0366L330.865 77.7899L329.186 77.8555ZM323.958 78.0598L323.616 69.3065L325.295 69.2409L325.637 77.9942L323.958 78.0598ZM324.649 74.2139L324.591 72.7391L329.819 72.5348L329.877 74.0097L324.649 74.2139ZM332.358 77.7316L332.016 68.9783L337.963 68.7459L338.019 70.1728L333.75 70.3396L333.832 72.426L337.861 72.2686L337.914 73.6475L333.886 73.805L333.981 76.2391L338.249 76.0723L338.305 77.4992L332.358 77.7316ZM339.621 77.4478L339.279 68.6945L342.037 68.5867C343.34 68.5358 344.304 68.7143 344.928 69.1222C345.56 69.5299 345.895 70.1933 345.93 71.1126C345.966 72.0159 345.705 72.7106 345.147 73.1968C344.59 73.6749 343.735 73.9365 342.584 73.9815L340.33 74.0696L340.277 72.7146L342.279 72.6363C342.983 72.6089 343.486 72.4851 343.79 72.2651C344.093 72.045 344.236 71.7072 344.219 71.2516C344.201 70.7959 344.032 70.4703 343.712 70.2746C343.392 70.0789 342.881 69.9948 342.177 70.0223L341.014 70.0678L341.3 77.3822L339.621 77.4478ZM344.669 77.2505L340.832 73.4134L342.787 73.3371L346.696 77.1714L344.669 77.2505ZM350.246 77.1527C349.654 77.1758 349.072 77.1385 348.5 77.0408C347.927 76.9351 347.449 76.7816 347.065 76.5805L347.391 75.0906C347.668 75.2159 347.973 75.3281 348.305 75.4272C348.637 75.5183 348.976 75.5891 349.322 75.6396C349.668 75.6822 349.993 75.6975 350.296 75.6856C350.824 75.665 351.224 75.5573 351.497 75.3625C351.769 75.1677 351.899 74.8945 351.885 74.5427C351.877 74.3509 351.827 74.1927 351.734 74.0682C351.641 73.9358 351.505 73.825 351.325 73.736C351.145 73.6389 350.917 73.5517 350.642 73.4744C350.367 73.3971 350.044 73.3177 349.672 73.2361C349.244 73.1328 348.859 73.0117 348.517 72.873C348.175 72.7342 347.881 72.5656 347.633 72.3671C347.393 72.1683 347.204 71.9355 347.065 71.6687C346.934 71.3936 346.862 71.0762 346.848 70.7165C346.817 69.9331 347.093 69.3218 347.677 68.8827C348.26 68.4356 349.099 68.1907 350.194 68.1479C350.738 68.1266 351.279 68.1575 351.819 68.2405C352.366 68.3152 352.839 68.4328 353.238 68.5934L352.9 70.0837C352.509 69.9148 352.08 69.7915 351.612 69.7137C351.144 69.6279 350.683 69.5939 350.227 69.6117C349.684 69.6329 349.275 69.733 349.002 69.9118C348.728 70.0826 348.598 70.3279 348.61 70.6476C348.618 70.8395 348.664 71.0018 348.749 71.1346C348.834 71.2593 348.959 71.3666 349.122 71.4562C349.294 71.5456 349.505 71.6294 349.757 71.7077C350.016 71.7856 350.323 71.8697 350.679 71.9598C351.14 72.0699 351.549 72.1981 351.907 72.3442C352.273 72.482 352.58 72.6502 352.827 72.8486C353.083 73.0388 353.28 73.2673 353.419 73.5341C353.557 73.8009 353.634 74.1181 353.648 74.4858C353.679 75.2852 353.396 75.9208 352.798 76.3925C352.207 76.8559 351.357 77.1093 350.246 77.1527Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M177.566 126.334C176.773 126.799 175.991 127.048 175.223 127.081C174.45 127.108 173.735 126.924 173.078 126.53C172.423 126.125 171.863 125.526 171.398 124.732C170.929 123.932 170.68 123.151 170.651 122.389C170.629 121.623 170.82 120.913 171.225 120.258C171.625 119.597 172.222 119.034 173.016 118.569C173.824 118.096 174.611 117.848 175.376 117.826C176.145 117.793 176.855 117.975 177.505 118.373C178.162 118.766 178.725 119.364 179.195 120.164C179.66 120.958 179.905 121.741 179.932 122.514C179.961 123.276 179.775 123.987 179.374 124.649C178.977 125.299 178.374 125.861 177.566 126.334ZM176.82 125.06C177.331 124.761 177.705 124.403 177.943 123.985C178.18 123.568 178.279 123.112 178.239 122.616C178.202 122.109 178.023 121.583 177.704 121.038C177.384 120.493 177.014 120.083 176.595 119.81C176.178 119.526 175.729 119.385 175.249 119.389C174.769 119.392 174.273 119.543 173.762 119.842C173.259 120.138 172.884 120.496 172.64 120.917C172.402 121.335 172.302 121.797 172.339 122.303C172.38 122.799 172.559 123.32 172.879 123.865C173.198 124.41 173.567 124.825 173.984 125.109C174.403 125.383 174.853 125.518 175.334 125.514C175.821 125.507 176.316 125.356 176.82 125.06ZM182.3 123.421L177.871 115.863L180.149 114.528C181.288 113.861 182.259 113.58 183.062 113.684C183.872 113.784 184.531 114.269 185.041 115.139C185.546 116.002 185.661 116.806 185.384 117.553C185.114 118.295 184.455 118.973 183.406 119.588L181.635 120.626L180.907 119.383L182.491 118.455C183.14 118.075 183.55 117.691 183.722 117.303C183.889 116.908 183.835 116.476 183.56 116.007C183.285 115.537 182.937 115.283 182.515 115.243C182.092 115.202 181.557 115.373 180.908 115.753L180.049 116.256L183.749 122.572L182.3 123.421ZM188.733 119.652L184.305 112.094L189.44 109.084L190.162 110.317L186.476 112.476L187.532 114.278L191.01 112.239L191.708 113.43L188.229 115.468L189.461 117.57L193.147 115.41L193.869 116.643L188.733 119.652ZM195.005 115.977L190.576 108.419L192.088 107.533L198.261 110.828L198.281 110.816L195.266 105.67L196.716 104.821L201.144 112.379L199.622 113.271L193.46 109.97L193.439 109.982L196.454 115.127L195.005 115.977ZM202.429 111.627L198 104.068L199.512 103.183L205.685 106.478L205.706 106.466L202.69 101.32L204.14 100.471L208.569 108.029L207.047 108.921L200.884 105.619L200.863 105.631L203.878 110.777L202.429 111.627ZM209.853 107.276L205.424 99.7182L210.56 96.7091L211.282 97.9412L207.596 100.101L208.652 101.902L212.13 99.864L212.828 101.055L209.349 103.093L210.581 105.195L214.267 103.035L214.989 104.267L209.853 107.276ZM218.517 102.339C218.007 102.638 217.476 102.879 216.925 103.063C216.37 103.24 215.876 103.33 215.443 103.334L215.028 101.866C215.331 101.846 215.653 101.801 215.992 101.732C216.328 101.656 216.66 101.558 216.989 101.44C217.314 101.314 217.608 101.174 217.87 101.021C218.326 100.754 218.628 100.47 218.777 100.17C218.925 99.8696 218.91 99.5676 218.732 99.2639C218.635 99.0983 218.517 98.9825 218.376 98.9165C218.231 98.8437 218.059 98.8103 217.858 98.8165C217.654 98.8157 217.412 98.8461 217.133 98.9077C216.854 98.9693 216.531 99.0517 216.165 99.1549C215.739 99.2657 215.342 99.3405 214.975 99.3792C214.609 99.418 214.269 99.4083 213.957 99.3501C213.651 99.288 213.375 99.1719 213.127 99.0019C212.882 98.821 212.668 98.5752 212.486 98.2646C212.09 97.5882 212.045 96.9189 212.353 96.2566C212.656 95.5874 213.281 94.9758 214.226 94.4217C214.696 94.1467 215.188 93.9186 215.703 93.7373C216.221 93.5451 216.693 93.4259 217.12 93.3795L217.525 94.8532C217.101 94.8886 216.664 94.9822 216.215 95.1339C215.762 95.2788 215.339 95.4665 214.946 95.697C214.476 95.972 214.163 96.2528 214.007 96.5393C213.846 96.8189 213.846 97.0967 214.008 97.3728C214.105 97.5385 214.223 97.6598 214.36 97.7367C214.494 97.8067 214.654 97.8426 214.841 97.8446C215.034 97.8425 215.26 97.8167 215.519 97.7672C215.784 97.7137 216.095 97.6429 216.451 97.5546C216.909 97.4345 217.331 97.3545 217.715 97.3146C218.103 97.2638 218.453 97.2674 218.765 97.3255C219.08 97.3727 219.362 97.4813 219.61 97.6513C219.857 97.8212 220.074 98.065 220.261 98.3825C220.665 99.0727 220.715 99.7668 220.41 100.465C220.108 101.152 219.477 101.776 218.517 102.339ZM224.819 98.6459C224.308 98.9452 223.778 99.1867 223.227 99.3703C222.672 99.547 222.178 99.6372 221.744 99.641L221.33 98.1733C221.633 98.1532 221.954 98.1085 222.294 98.0393C222.63 97.9632 222.962 97.8658 223.291 97.7471C223.616 97.6215 223.91 97.4819 224.172 97.3282C224.628 97.0613 224.93 96.7776 225.078 96.4773C225.227 96.177 225.212 95.875 225.034 95.5713C224.937 95.4056 224.818 95.2898 224.678 95.2239C224.533 95.151 224.361 95.1177 224.16 95.1238C223.956 95.1231 223.714 95.1535 223.435 95.2151C223.156 95.2767 222.833 95.3591 222.467 95.4623C222.041 95.5731 221.644 95.6479 221.277 95.6866C220.91 95.7253 220.571 95.7156 220.259 95.6575C219.953 95.5953 219.677 95.4793 219.429 95.3093C219.184 95.1284 218.97 94.8826 218.788 94.572C218.392 93.8956 218.347 93.2262 218.655 92.564C218.958 91.8948 219.582 91.2832 220.528 90.7291C220.997 90.4541 221.49 90.226 222.005 90.0447C222.523 89.8525 222.995 89.7333 223.422 89.6869L223.827 91.1606C223.403 91.196 222.966 91.2896 222.517 91.4413C222.064 91.5862 221.641 91.7738 221.248 92.0044C220.778 92.2794 220.465 92.5602 220.308 92.8467C220.148 93.1263 220.148 93.4041 220.31 93.6802C220.407 93.8459 220.525 93.9671 220.662 94.044C220.796 94.114 220.956 94.15 221.143 94.1519C221.336 94.1498 221.562 94.1241 221.821 94.0746C222.086 94.0211 222.397 93.9502 222.753 93.862C223.211 93.7419 223.633 93.6619 224.017 93.622C224.405 93.5712 224.755 93.5748 225.067 93.6329C225.382 93.6801 225.663 93.7887 225.911 93.9586C226.159 94.1286 226.376 94.3723 226.562 94.6899C226.967 95.3801 227.017 96.0742 226.712 96.7721C226.409 97.4591 225.779 98.0837 224.819 98.6459Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M97.1261 235.352L89.5138 231.017L92.56 225.668L93.8322 226.392L91.6173 230.282L93.6299 231.428L95.726 227.747L96.9669 228.453L94.8708 232.135L97.9574 233.892L97.1261 235.352ZM102.782 225.662C102.327 226.461 101.775 227.068 101.125 227.48C100.469 227.889 99.7579 228.087 98.9918 228.074C98.2227 228.051 97.4385 227.811 96.639 227.356C95.8326 226.897 95.2265 226.345 94.8207 225.699C94.4188 225.047 94.2297 224.336 94.2534 223.567C94.2701 222.794 94.506 222.008 94.9613 221.208C95.4245 220.395 95.9822 219.787 96.6345 219.386C97.2838 218.973 97.9896 218.776 98.7517 218.796C99.5177 218.809 100.304 219.045 101.11 219.504C101.91 219.959 102.514 220.515 102.923 221.171C103.329 221.817 103.523 222.526 103.506 223.299C103.487 224.061 103.245 224.849 102.782 225.662ZM101.5 224.932C101.792 224.417 101.938 223.92 101.935 223.44C101.932 222.959 101.79 222.514 101.507 222.105C101.222 221.685 100.804 221.318 100.255 221.005C99.7061 220.693 99.1814 220.523 98.6813 220.496C98.1781 220.458 97.7193 220.56 97.3049 220.803C96.8905 221.046 96.5369 221.424 96.2439 221.939C95.9549 222.446 95.8098 222.944 95.8085 223.431C95.8113 223.911 95.9553 224.361 96.2407 224.782C96.5231 225.191 96.939 225.552 97.4882 225.865C98.0374 226.178 98.5635 226.353 99.0667 226.391C99.5668 226.418 100.024 226.31 100.439 226.067C100.857 225.818 101.211 225.439 101.5 224.932ZM105.428 220.774L97.8152 216.439L99.181 214.041C99.8262 212.908 100.487 212.184 101.163 211.869C101.843 211.548 102.583 211.614 103.383 212.07C104.168 212.517 104.62 213.106 104.738 213.836C104.85 214.562 104.62 215.426 104.05 216.427L102.934 218.387L101.755 217.716L102.747 215.975C103.095 215.363 103.256 214.87 103.23 214.496C103.204 214.122 102.992 213.822 102.596 213.597C102.2 213.371 101.834 213.342 101.499 213.51C101.164 213.679 100.822 214.069 100.474 214.68L99.8979 215.692L106.259 219.314L105.428 220.774ZM107.927 216.384L102.642 217.614L103.61 215.914L108.931 214.621L107.927 216.384ZM111.58 210.213C111.085 211.082 110.503 211.74 109.834 212.187C109.169 212.628 108.449 212.849 107.675 212.85C106.905 212.844 106.113 212.61 105.3 212.146C104.487 211.683 103.881 211.122 103.483 210.463C103.085 209.804 102.902 209.082 102.934 208.299C102.969 207.51 103.228 206.691 103.711 205.842C103.977 205.377 104.28 204.965 104.622 204.607C104.957 204.245 105.315 203.957 105.695 203.741L106.731 204.759C106.395 204.945 106.075 205.2 105.771 205.524C105.46 205.844 105.197 206.191 104.984 206.567C104.679 207.102 104.524 207.617 104.518 208.111C104.506 208.601 104.641 209.06 104.922 209.487C105.197 209.911 105.616 210.282 106.179 210.603C106.742 210.924 107.279 211.096 107.79 211.12C108.294 211.14 108.761 211.015 109.192 210.745C109.615 210.47 109.987 210.051 110.308 209.488C110.47 209.203 110.596 208.916 110.687 208.627C110.778 208.338 110.829 208.054 110.841 207.776L111.166 208.223L108.976 206.976L107.693 209.229L106.473 208.534L108.587 204.822L112.56 207.084C112.545 207.563 112.449 208.079 112.272 208.632C112.096 209.185 111.865 209.712 111.58 210.213ZM113.771 206.122L106.158 201.788L107.025 200.265L114.638 204.6L113.771 206.122ZM116.499 201.332L107.414 199.583L108.328 197.977L115.579 199.551L115.591 199.531L110.537 194.098L111.452 192.492L117.585 199.423L116.499 201.332ZM119.404 196.231L111.791 191.896L114.736 186.724L115.977 187.43L113.863 191.143L115.678 192.176L117.673 188.672L118.872 189.355L116.877 192.859L118.994 194.064L121.108 190.352L122.349 191.058L119.404 196.231ZM123 189.914L115.388 185.579L116.255 184.057L123.249 183.828L123.261 183.807L118.078 180.855L118.909 179.396L126.522 183.73L125.649 185.263L118.661 185.482L118.649 185.503L123.832 188.454L123 189.914ZM127.258 182.437L119.646 178.102L122.591 172.93L123.832 173.636L121.718 177.349L123.533 178.382L125.528 174.878L126.727 175.561L124.732 179.065L126.849 180.27L128.963 176.558L130.204 177.264L127.258 182.437ZM132.297 173.831C132.004 174.345 131.665 174.819 131.28 175.254C130.887 175.684 130.504 176.009 130.131 176.229L129.038 175.165C129.291 174.996 129.547 174.796 129.807 174.567C130.059 174.333 130.299 174.083 130.524 173.815C130.743 173.544 130.928 173.277 131.078 173.012C131.34 172.554 131.46 172.157 131.438 171.823C131.417 171.488 131.253 171.234 130.947 171.06C130.781 170.965 130.62 170.924 130.465 170.937C130.303 170.946 130.137 171.003 129.967 171.109C129.789 171.21 129.595 171.357 129.384 171.55C129.173 171.743 128.934 171.976 128.669 172.248C128.355 172.557 128.049 172.82 127.75 173.037C127.452 173.253 127.153 173.415 126.853 173.52C126.558 173.619 126.26 173.657 125.961 173.633C125.658 173.599 125.35 173.493 125.037 173.315C124.356 172.927 123.983 172.369 123.918 171.642C123.847 170.911 124.082 170.069 124.625 169.116C124.894 168.644 125.206 168.2 125.562 167.786C125.914 167.361 126.264 167.021 126.611 166.768L127.698 167.842C127.348 168.085 127.016 168.384 126.703 168.74C126.383 169.091 126.111 169.465 125.885 169.862C125.616 170.334 125.485 170.734 125.492 171.06C125.493 171.383 125.632 171.623 125.91 171.782C126.077 171.877 126.239 171.923 126.397 171.921C126.548 171.915 126.705 171.866 126.867 171.774C127.034 171.676 127.217 171.541 127.416 171.369C127.619 171.19 127.853 170.973 128.117 170.719C128.454 170.386 128.779 170.106 129.093 169.879C129.403 169.642 129.708 169.47 130.007 169.364C130.304 169.248 130.602 169.201 130.902 169.225C131.201 169.248 131.511 169.351 131.831 169.533C132.526 169.929 132.916 170.505 133 171.262C133.082 172.008 132.847 172.864 132.297 173.831ZM135.911 167.484C135.618 167.998 135.279 168.472 134.894 168.907C134.502 169.337 134.119 169.662 133.745 169.882L132.652 168.818C132.905 168.649 133.161 168.449 133.421 168.22C133.674 167.986 133.913 167.736 134.139 167.468C134.358 167.197 134.542 166.929 134.693 166.665C134.954 166.206 135.074 165.81 135.053 165.475C135.031 165.141 134.868 164.887 134.562 164.713C134.395 164.618 134.234 164.577 134.079 164.59C133.918 164.599 133.751 164.656 133.581 164.762C133.403 164.863 133.209 165.01 132.998 165.203C132.787 165.396 132.549 165.629 132.283 165.901C131.969 166.21 131.663 166.473 131.365 166.69C131.066 166.906 130.767 167.068 130.468 167.173C130.172 167.272 129.875 167.31 129.575 167.286C129.272 167.252 128.964 167.146 128.652 166.968C127.97 166.58 127.597 166.022 127.533 165.295C127.461 164.564 127.697 163.722 128.239 162.769C128.508 162.297 128.821 161.853 129.176 161.439C129.529 161.014 129.879 160.674 130.226 160.421L131.312 161.495C130.962 161.738 130.631 162.037 130.318 162.393C129.998 162.744 129.725 163.118 129.499 163.515C129.23 163.987 129.099 164.387 129.107 164.713C129.107 165.036 129.246 165.276 129.525 165.435C129.691 165.53 129.854 165.576 130.011 165.574C130.162 165.568 130.319 165.519 130.482 165.427C130.648 165.329 130.831 165.194 131.03 165.022C131.233 164.843 131.467 164.626 131.732 164.372C132.069 164.039 132.394 163.759 132.707 163.532C133.017 163.295 133.322 163.123 133.621 163.017C133.918 162.901 134.216 162.854 134.516 162.877C134.816 162.901 135.125 163.004 135.445 163.186C136.14 163.582 136.53 164.158 136.615 164.915C136.696 165.661 136.462 166.517 135.911 167.484Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M537.591 185.262L545.187 180.898L546.024 182.355L538.428 186.719L537.591 185.262ZM534.985 180.725L542.581 176.362L543.418 177.818L535.822 182.182L534.985 180.725ZM538.712 179.553L539.992 178.817L542.599 183.354L541.319 184.089L538.712 179.553ZM541.089 191.59C540.63 190.793 540.388 190.009 540.361 189.24C540.342 188.467 540.532 187.754 540.931 187.1C541.341 186.449 541.945 185.895 542.743 185.437C543.548 184.974 544.331 184.732 545.093 184.709C545.859 184.694 546.568 184.891 547.218 185.301C547.876 185.708 548.434 186.31 548.893 187.107C549.359 187.919 549.6 188.708 549.615 189.474C549.642 190.243 549.454 190.951 549.05 191.597C548.651 192.251 548.049 192.809 547.244 193.272C546.446 193.73 545.661 193.969 544.888 193.989C544.126 194.011 543.416 193.819 542.758 193.413C542.112 193.01 541.555 192.402 541.089 191.59ZM542.369 190.855C542.663 191.369 543.019 191.746 543.434 191.987C543.849 192.228 544.305 192.331 544.801 192.295C545.308 192.262 545.835 192.088 546.383 191.773C546.931 191.458 547.344 191.092 547.621 190.675C547.909 190.261 548.053 189.813 548.054 189.333C548.055 188.853 547.908 188.356 547.613 187.843C547.322 187.336 546.967 186.959 546.547 186.711C546.132 186.47 545.671 186.365 545.164 186.398C544.668 186.434 544.146 186.61 543.598 186.924C543.05 187.239 542.632 187.604 542.344 188.018C542.067 188.436 541.928 188.885 541.927 189.365C541.931 189.852 542.078 190.349 542.369 190.855ZM543.961 196.349L551.556 191.985L552.872 194.274C553.529 195.419 553.802 196.392 553.691 197.194C553.584 198.003 553.093 198.659 552.219 199.161C551.352 199.659 550.546 199.767 549.802 199.483C549.063 199.207 548.39 198.542 547.784 197.488L546.762 195.708L548.011 194.991L548.925 196.583C549.3 197.235 549.68 197.649 550.067 197.823C550.46 197.994 550.892 197.944 551.364 197.673C551.836 197.402 552.094 197.056 552.137 196.634C552.181 196.212 552.015 195.675 551.641 195.023L551.145 194.159L544.798 197.806L543.961 196.349ZM547.675 202.814L555.271 198.451L558.236 203.612L556.997 204.323L554.869 200.619L553.059 201.659L555.067 205.155L553.871 205.842L551.862 202.346L549.75 203.56L551.878 207.264L550.64 207.975L547.675 202.814Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M503.474 106.809C502.791 106.134 502.328 105.43 502.086 104.696C501.849 103.957 501.836 103.218 502.047 102.482C502.263 101.751 502.703 101.049 503.366 100.378C504.03 99.7061 504.725 99.2578 505.454 99.0327C506.188 98.8132 506.923 98.82 507.66 99.053C508.403 99.2804 509.115 99.7314 509.798 100.406C510.578 101.176 511.104 102.027 511.375 102.959L510.073 103.731C509.813 102.821 509.393 102.08 508.812 101.507C508.38 101.079 507.923 100.797 507.441 100.658C506.959 100.52 506.476 100.531 505.99 100.692C505.51 100.848 505.048 101.151 504.604 101.6C504.166 102.044 503.869 102.51 503.713 102.998C503.558 103.485 503.552 103.969 503.697 104.449C503.841 104.929 504.129 105.382 504.562 105.81C505.131 106.372 505.878 106.783 506.801 107.043L506.046 108.355C505.111 108.094 504.253 107.579 503.474 106.809ZM509.2 112.465C508.545 111.819 508.103 111.128 507.872 110.395C507.647 109.655 507.639 108.917 507.85 108.18C508.072 107.443 508.506 106.748 509.152 106.093C509.804 105.433 510.495 104.99 511.223 104.765C511.957 104.546 512.692 104.547 513.429 104.768C514.172 104.984 514.87 105.416 515.525 106.062C516.19 106.72 516.633 107.416 516.853 108.15C517.083 108.884 517.091 109.617 516.875 110.348C516.664 111.084 516.233 111.783 515.581 112.443C514.934 113.098 514.241 113.537 513.501 113.763C512.773 113.988 512.038 113.992 511.295 113.776C510.564 113.56 509.866 113.123 509.2 112.465ZM510.237 111.415C510.658 111.831 511.101 112.1 511.566 112.222C512.03 112.343 512.497 112.321 512.965 112.154C513.445 111.987 513.907 111.678 514.351 111.229C514.796 110.779 515.095 110.316 515.251 109.84C515.418 109.364 515.437 108.894 515.31 108.431C515.183 107.968 514.908 107.528 514.487 107.112C514.072 106.702 513.629 106.433 513.159 106.306C512.694 106.184 512.222 106.207 511.742 106.374C511.273 106.541 510.817 106.849 510.373 107.299C509.929 107.749 509.623 108.211 509.457 108.688C509.301 109.164 509.287 109.633 509.414 110.097C509.547 110.565 509.822 111.005 510.237 111.415ZM515.876 119.06C515.046 118.239 514.602 117.425 514.546 116.616C514.496 115.813 514.834 115.045 515.559 114.31L519.581 110.238L520.777 111.419L516.982 115.26C516.481 115.767 516.224 116.232 516.21 116.657C516.201 117.087 516.436 117.538 516.914 118.01C517.392 118.482 517.843 118.709 518.267 118.689C518.697 118.675 519.162 118.415 519.662 117.908L523.457 114.067L524.652 115.247L520.63 119.32C519.905 120.054 519.14 120.401 518.337 120.36C517.533 120.32 516.713 119.887 515.876 119.06ZM519.746 122.714L525.902 116.482L527.866 118.422C528.794 119.338 529.322 120.163 529.451 120.898C529.586 121.638 529.33 122.336 528.683 122.99C528.048 123.633 527.362 123.918 526.627 123.843C525.896 123.763 525.121 123.318 524.302 122.508L522.697 120.923L523.65 119.958L525.076 121.366C525.576 121.861 526.011 122.144 526.379 122.215C526.747 122.287 527.091 122.16 527.412 121.836C527.732 121.511 527.855 121.165 527.779 120.798C527.703 120.431 527.415 120 526.914 119.505L526.086 118.687L520.942 123.895L519.746 122.714ZM523.341 126.265L523.519 120.841L524.911 122.216L524.783 127.69L523.341 126.265ZM525.136 128.038L533.443 123.931L535.057 125.524L531.052 133.882L529.737 132.583L533.251 125.748L533.234 125.731L526.451 129.336L525.136 128.038ZM527.799 127.852L528.828 126.81L532.243 130.183L531.214 131.225L527.799 127.852ZM534.541 137.497C533.83 136.794 533.344 136.062 533.085 135.3C532.832 134.543 532.804 133.791 533.003 133.043C533.208 132.301 533.639 131.597 534.297 130.931C534.955 130.265 535.654 129.825 536.393 129.611C537.133 129.397 537.877 129.407 538.625 129.64C539.379 129.878 540.103 130.341 540.798 131.026C541.179 131.403 541.498 131.803 541.755 132.225C542.018 132.642 542.205 133.063 542.315 133.486L541.063 134.224C540.971 133.851 540.807 133.476 540.573 133.098C540.344 132.715 540.076 132.372 539.769 132.068C539.331 131.635 538.873 131.352 538.397 131.219C537.927 131.081 537.449 131.092 536.964 131.254C536.484 131.409 536.016 131.718 535.561 132.179C535.105 132.64 534.8 133.114 534.645 133.601C534.495 134.083 534.495 134.567 534.645 135.052C534.801 135.532 535.109 136 535.57 136.455C535.803 136.686 536.048 136.882 536.303 137.045C536.559 137.207 536.82 137.33 537.086 137.413L536.57 137.612L538.341 135.819L536.497 133.997L537.483 132.998L540.523 136.001L537.31 139.253C536.851 139.115 536.377 138.888 535.889 138.575C535.4 138.261 534.951 137.902 534.541 137.497ZM538.113 140.857L544.269 134.624L548.504 138.807L547.5 139.823L544.461 136.821L542.994 138.306L545.862 141.14L544.893 142.122L542.024 139.288L540.312 141.021L543.351 144.023L542.348 145.039L538.113 140.857Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M212.514 69.8145C211.592 70.0834 210.752 70.1452 209.993 70C209.231 69.8471 208.58 69.4997 208.038 68.9577C207.505 68.4134 207.105 67.6882 206.841 66.7819C206.577 65.8757 206.523 65.0497 206.68 64.3037C206.846 63.5555 207.209 62.9161 207.771 62.3855C208.33 61.8472 209.071 61.4436 209.993 61.1747C211.045 60.8678 212.044 60.8221 212.99 61.0376L213.032 62.5506C212.111 62.336 211.259 62.3429 210.475 62.5715C209.892 62.7418 209.422 63.0038 209.067 63.3574C208.712 63.711 208.487 64.1392 208.392 64.6419C208.295 65.137 208.334 65.6879 208.511 66.2946C208.686 66.8936 208.949 67.3795 209.299 67.7523C209.65 68.125 210.07 68.365 210.559 68.4721C211.049 68.5793 211.586 68.5477 212.169 68.3774C212.937 68.1533 213.659 67.7009 214.336 67.0202L215.115 68.3181C214.433 69.0087 213.566 69.5075 212.514 69.8145ZM220.24 67.56C219.357 67.8177 218.539 67.869 217.785 67.7139C217.029 67.5511 216.38 67.1987 215.839 66.6566C215.303 66.1047 214.906 65.3871 214.648 64.504C214.388 63.6131 214.337 62.7947 214.494 62.0488C214.66 61.3006 215.018 60.6585 215.57 60.1224C216.12 59.5787 216.836 59.178 217.719 58.9203C218.618 58.6581 219.441 58.6096 220.189 58.7746C220.943 58.9297 221.587 59.2794 222.121 59.8237C222.662 60.3657 223.063 61.0821 223.323 61.973C223.58 62.8562 223.628 63.6757 223.465 64.4315C223.308 65.1775 222.954 65.8223 222.404 66.3661C221.86 66.8999 221.139 67.2979 220.24 67.56ZM219.827 66.1431C220.395 65.9773 220.845 65.7209 221.177 65.374C221.51 65.0271 221.717 64.6084 221.798 64.1178C221.886 63.6173 221.841 63.0637 221.664 62.457C221.487 61.8503 221.228 61.3633 220.888 60.996C220.552 60.6187 220.152 60.3732 219.685 60.2593C219.218 60.1454 218.701 60.1714 218.133 60.3372C217.572 60.5008 217.122 60.7572 216.782 61.1063C216.45 61.4532 216.24 61.8769 216.153 62.3774C216.071 62.868 216.119 63.4166 216.296 64.0233C216.473 64.63 216.729 65.122 217.064 65.4992C217.404 65.8666 217.808 66.1072 218.274 66.221C218.749 66.3327 219.266 66.3067 219.827 66.1431ZM225.886 65.7876L223.433 57.3782L225.115 56.8875L230.299 61.5876L230.322 61.5809L228.651 55.8556L230.264 55.3851L232.718 63.7944L231.024 64.2885L225.852 59.585L225.829 59.5918L227.499 65.317L225.886 65.7876ZM234.492 63.2766L232.039 54.8672L233.721 54.3765L238.905 59.0766L238.928 59.0699L237.257 53.3446L238.87 52.874L241.324 61.2834L239.63 61.7775L234.458 57.074L234.435 57.0807L236.105 62.806L234.492 63.2766ZM243.098 60.7655L240.645 52.3562L246.358 50.6891L246.758 52.0599L242.657 53.2565L243.242 55.2609L247.113 54.1315L247.499 55.4563L243.629 56.5856L244.311 58.9241L248.412 57.7276L248.812 59.0984L243.098 60.7655ZM254.317 57.6171C253.396 57.886 252.555 57.9479 251.796 57.8027C251.035 57.6498 250.384 57.3023 249.842 56.7603C249.308 56.216 248.909 55.4908 248.645 54.5846C248.38 53.6784 248.327 52.8523 248.484 52.1064C248.649 51.3582 249.013 50.7188 249.575 50.1882C250.134 49.6499 250.875 49.2463 251.796 48.9774C252.849 48.6704 253.848 48.6247 254.794 48.8403L254.835 50.3532C253.914 50.1386 253.062 50.1456 252.279 50.3741C251.695 50.5444 251.226 50.8064 250.871 51.16C250.516 51.5137 250.29 51.9419 250.195 52.4446C250.098 52.9396 250.138 53.4905 250.315 54.0972C250.49 54.6962 250.753 55.1821 251.103 55.5549C251.453 55.9277 251.873 56.1676 252.363 56.2748C252.853 56.3819 253.389 56.3503 253.973 56.18C254.741 55.956 255.463 55.5036 256.14 54.8229L256.918 56.1207C256.236 56.8113 255.369 57.3101 254.317 57.6171ZM260.63 55.6501L258.59 48.6577L255.894 49.4442L255.481 48.0273L262.543 45.9669L262.956 47.3838L260.26 48.1703L262.301 55.1628L260.63 55.6501ZM266.297 53.9966L263.844 45.5873L265.526 45.0965L267.979 53.5059L266.297 53.9966ZM273.766 51.9424C272.883 52.2001 272.065 52.2514 271.311 52.0963C270.555 51.9335 269.906 51.5811 269.365 51.039C268.829 50.4871 268.432 49.7695 268.174 48.8863C267.914 47.9955 267.863 47.1771 268.02 46.4312C268.185 45.683 268.544 45.0409 269.096 44.5048C269.646 43.9611 270.362 43.5604 271.245 43.3027C272.144 43.0405 272.967 42.9919 273.715 43.157C274.469 43.3121 275.113 43.6618 275.646 44.2061C276.188 44.7481 276.589 45.4645 276.849 46.3554C277.106 47.2386 277.154 48.0581 276.991 48.8139C276.834 49.5599 276.48 50.2047 275.93 50.7484C275.386 51.2823 274.665 51.6802 273.766 51.9424ZM273.353 50.5255C273.921 50.3597 274.371 50.1033 274.703 49.7564C275.035 49.4095 275.242 48.9908 275.324 48.5002C275.412 47.9997 275.367 47.4461 275.19 46.8394C275.013 46.2327 274.754 45.7457 274.413 45.3784C274.078 45.0011 273.678 44.7555 273.211 44.6417C272.744 44.5278 272.227 44.5538 271.659 44.7196C271.098 44.8832 270.648 45.1395 270.308 45.4887C269.976 45.8356 269.766 46.2593 269.679 46.7598C269.597 47.2504 269.645 47.799 269.822 48.4057C269.999 49.0124 270.255 49.5044 270.59 49.8816C270.93 50.2489 271.334 50.4895 271.8 50.6034C272.275 50.7151 272.792 50.6891 273.353 50.5255ZM279.412 50.17L276.959 41.7606L278.641 41.2699L283.825 45.97L283.848 45.9633L282.177 40.238L283.79 39.7675L286.243 48.1768L284.55 48.6709L279.378 43.9674L279.355 43.9742L281.025 49.6994L279.412 50.17Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M19.8346 385.754L28.1196 382.909L28.9772 385.406C29.4059 386.654 29.4897 387.662 29.2284 388.428C28.9698 389.202 28.3638 389.753 27.4105 390.08C26.4647 390.405 25.6534 390.358 24.9767 389.939C24.3025 389.528 23.768 388.747 23.373 387.597L22.7065 385.656L24.0684 385.189L24.6648 386.925C24.909 387.636 25.2043 388.114 25.5506 388.359C25.9044 388.601 26.3386 388.634 26.8531 388.457C27.3676 388.281 27.6863 387.989 27.8091 387.583C27.9319 387.178 27.8712 386.619 27.6269 385.908L27.3034 384.966L20.3803 387.343L19.8346 385.754ZM22.3735 393.147L30.6585 390.302L32.5918 395.931L31.2412 396.395L29.8536 392.354L27.8789 393.033L29.1885 396.846L27.8833 397.294L26.5737 393.481L24.2698 394.272L25.6574 398.312L24.3068 398.776L22.3735 393.147ZM24.5942 399.613L33.8615 399.628L34.5982 401.773L27.2954 407.478L26.6951 405.731L32.8812 401.17L32.8734 401.147L25.1945 401.361L24.5942 399.613ZM27.0625 400.631L28.4472 400.155L30.0063 404.695L28.6217 405.17L27.0625 400.631ZM28.751 412.086C28.4392 411.178 28.338 410.342 28.4475 409.577C28.5645 408.809 28.881 408.142 29.397 407.576C29.9156 407.017 30.6214 406.584 31.5142 406.278C32.407 405.971 33.2296 405.879 33.9821 406.001C34.7372 406.131 35.393 406.464 35.9494 407C36.5133 407.534 36.9512 408.255 37.263 409.163C37.619 410.199 37.7115 411.195 37.5406 412.151L36.0312 412.263C36.2024 411.333 36.1555 410.482 35.8904 409.71C35.693 409.135 35.4093 408.679 35.0394 408.341C34.6695 408.002 34.2312 407.798 33.7246 407.726C33.2255 407.652 32.6771 407.718 32.0794 407.923C31.4892 408.126 31.0161 408.411 30.6602 408.779C30.3043 409.146 30.0843 409.577 30.0003 410.071C29.9162 410.565 29.9729 411.1 30.1704 411.675C30.4302 412.431 30.916 413.132 31.6277 413.775L30.3678 414.614C29.6459 413.965 29.107 413.123 28.751 412.086ZM30.3403 416.344L38.6254 413.499L40.5587 419.128L39.2081 419.592L37.8205 415.552L35.8457 416.23L37.1553 420.043L35.8502 420.492L34.5405 416.678L32.2366 417.47L33.6242 421.51L32.2736 421.974L30.3403 416.344Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M533.204 561.737L527.35 555.22L528.653 554.05L534.507 560.566L533.204 561.737ZM535.948 559.271L530.094 552.755L531.665 551.344L536.758 553.672L536.776 553.656L535.004 548.344L536.575 546.933L542.429 553.449L541.179 554.572L537.089 550.019L537.072 550.035L538.526 554.455L537.366 555.498L533.126 553.58L533.108 553.596L537.198 558.149L535.948 559.271ZM543.803 552.215L537.948 545.699L539.912 543.934C540.894 543.052 541.789 542.582 542.597 542.523C543.41 542.459 544.154 542.802 544.827 543.552C545.496 544.295 545.769 545.061 545.648 545.847C545.532 546.629 545.022 547.425 544.118 548.238L542.591 549.609L541.629 548.538L542.995 547.311C543.554 546.809 543.879 546.35 543.969 545.936C544.054 545.516 543.914 545.103 543.551 544.698C543.187 544.294 542.795 544.114 542.373 544.159C541.951 544.205 541.461 544.479 540.901 544.981L540.161 545.647L545.053 551.092L543.803 552.215ZM548.261 548.21L544.656 539.672L546.343 538.157L554.447 542.652L553.073 543.887L546.459 539.973L546.441 539.989L549.636 546.975L548.261 548.21ZM548.234 545.54L547.256 544.451L550.826 541.243L551.805 542.332L548.234 545.54ZM558.121 539.513C557.407 540.155 556.676 540.574 555.929 540.772C555.177 540.964 554.439 540.933 553.716 540.679C553 540.42 552.326 539.939 551.695 539.237C551.064 538.535 550.658 537.813 550.476 537.073C550.301 536.327 550.352 535.593 550.628 534.872C550.899 534.144 551.392 533.46 552.106 532.818C552.922 532.085 553.802 531.611 554.749 531.396L555.441 532.742C554.518 532.947 553.753 533.322 553.146 533.868C552.694 534.274 552.384 534.714 552.217 535.186C552.051 535.659 552.033 536.142 552.165 536.636C552.292 537.125 552.567 537.604 552.989 538.074C553.406 538.538 553.853 538.862 554.331 539.047C554.808 539.231 555.29 539.265 555.778 539.15C556.266 539.034 556.736 538.773 557.188 538.367C557.783 537.832 558.238 537.112 558.553 536.205L559.817 537.037C559.502 537.955 558.936 538.78 558.121 539.513ZM562.959 535.005L558.091 529.587L556.002 531.463L555.016 530.365L560.488 525.449L561.474 526.547L559.385 528.424L564.253 533.842L562.959 535.005Z"
    )
    .attr("fill", "white");
  shapes
    .append("path")
    .attr(
      "d",
      "M367.165 17.6331L369.518 9.19513L372.246 9.95595C373.379 10.2719 374.178 10.6817 374.644 11.1853C375.119 11.6834 375.262 12.2754 375.07 12.9612C374.928 13.4698 374.665 13.8489 374.28 14.0986C373.904 14.3428 373.444 14.4429 372.9 14.3991L372.894 14.4222C373.508 14.6931 373.927 15.0509 374.152 15.4956C374.386 15.9348 374.422 16.4472 374.259 17.0328C374.037 17.8266 373.566 18.3389 372.846 18.5698C372.133 18.8029 371.176 18.7518 369.973 18.4165L367.165 17.6331ZM370.351 17.0641C371.029 17.2532 371.553 17.2955 371.922 17.191C372.292 17.0865 372.534 16.83 372.648 16.4216C372.764 16.0055 372.69 15.6609 372.425 15.3878C372.163 15.107 371.693 14.8721 371.015 14.683L369.015 14.1253L369.382 12.8075L371.382 13.3653C371.976 13.5307 372.43 13.5702 372.744 13.4836C373.061 13.3893 373.27 13.161 373.371 12.7989C373.47 12.4444 373.406 12.1525 373.18 11.9231C372.961 11.696 372.551 11.4985 371.95 11.3309L370.759 10.9989L369.16 16.732L370.351 17.0641ZM374.897 19.7896L377.25 11.3517L382.983 12.9507L382.6 14.3262L378.485 13.1785L377.924 15.1898L381.808 16.273L381.437 17.6022L377.553 16.519L376.899 18.8655L381.014 20.0131L380.63 21.3886L374.897 19.7896ZM382.245 21.8391L384.599 13.4012L386.252 13.8622L384.295 20.8784L388.687 22.1035L388.291 23.5252L382.245 21.8391ZM392.622 24.8578C391.736 24.6106 391.013 24.2223 390.455 23.6929C389.899 23.1557 389.534 22.514 389.36 21.7679C389.196 21.0162 389.237 20.1972 389.485 19.311C389.734 18.4172 390.122 17.6949 390.649 17.1443C391.184 16.5959 391.828 16.2397 392.58 16.0756C393.333 15.9038 394.153 15.9415 395.04 16.1886C395.941 16.4401 396.666 16.8333 397.215 17.3683C397.773 17.8978 398.135 18.5345 398.301 19.2785C398.475 20.0247 398.438 20.8447 398.188 21.7386C397.941 22.6247 397.549 23.3459 397.012 23.902C396.485 24.4526 395.844 24.8138 395.09 24.9856C394.346 25.1518 393.523 25.1092 392.622 24.8578ZM393.018 23.436C393.589 23.5951 394.106 23.6149 394.571 23.4955C395.037 23.376 395.433 23.1296 395.762 22.7561C396.1 22.377 396.354 21.8831 396.524 21.2743C396.694 20.6656 396.731 20.1153 396.635 19.6236C396.55 19.1264 396.339 18.7063 396.003 18.3633C395.667 18.0204 395.213 17.7694 394.643 17.6104C394.081 17.4535 393.563 17.4337 393.09 17.5509C392.625 17.6703 392.223 17.9196 391.885 18.2986C391.556 18.6721 391.307 19.1633 391.137 19.772C390.968 20.3808 390.926 20.9338 391.011 21.4311C391.107 21.9228 391.322 22.3401 391.659 22.6831C392.003 23.0281 392.456 23.2791 393.018 23.436ZM398.353 26.3317L400.707 17.8937L402.394 18.3644L404.317 25.0924L404.34 25.0989L405.943 19.3541L407.561 19.8054L405.208 28.2434L403.508 27.7695L401.597 21.0447L401.574 21.0383L399.971 26.783L398.353 26.3317ZM411.129 30.0195C410.166 29.7508 409.386 29.3464 408.789 28.8062C408.2 28.2682 407.811 27.6239 407.621 26.8734C407.44 26.1251 407.474 25.3002 407.726 24.3986C407.977 23.497 408.374 22.7731 408.917 22.2268C409.46 21.6805 410.115 21.3275 410.882 21.1677C411.657 21.0101 412.514 21.0623 413.454 21.3245C413.971 21.4685 414.444 21.6628 414.874 21.9073C415.306 22.1442 415.673 22.421 415.975 22.7378L415.24 23.9902C414.978 23.7094 414.652 23.4609 414.264 23.2447C413.878 23.0208 413.477 22.8508 413.061 22.7347C412.468 22.5692 411.931 22.544 411.45 22.6592C410.972 22.7666 410.559 23.0087 410.213 23.3857C409.87 23.7549 409.611 24.2515 409.437 24.8757C409.263 25.4999 409.226 26.0628 409.327 26.5643C409.43 27.0582 409.665 27.4809 410.032 27.8324C410.401 28.1762 410.898 28.4352 411.522 28.6093C411.838 28.6974 412.147 28.7504 412.45 28.7683C412.752 28.7861 413.04 28.7667 413.313 28.7101L412.958 29.1343L413.635 26.7069L411.138 26.0106L411.515 24.6582L415.63 25.8059L414.402 30.2098C413.934 30.3117 413.41 30.3441 412.83 30.3071C412.251 30.2701 411.684 30.1742 411.129 30.0195ZM415.976 31.2467L418.329 22.8087L420.017 23.2794L417.663 31.7174L415.976 31.2467ZM419.529 32.2378L421.883 23.7998L423.57 24.2705L425.494 30.9985L425.517 31.0049L427.119 25.2602L428.737 25.7115L426.384 34.1495L424.685 33.6756L422.773 26.9508L422.75 26.9444L421.148 32.6891L419.529 32.2378ZM432.305 35.9256C431.342 35.6569 430.562 35.2525 429.965 34.7123C429.376 34.1743 428.987 33.53 428.797 32.7795C428.616 32.0312 428.651 31.2063 428.902 30.3047C429.154 29.4031 429.551 28.6792 430.093 28.1329C430.636 27.5866 431.291 27.2336 432.058 27.0738C432.833 26.9161 433.69 26.9684 434.631 27.2306C435.147 27.3746 435.62 27.5689 436.05 27.8134C436.482 28.0503 436.85 28.3271 437.152 28.6439L436.416 29.8963C436.154 29.6155 435.829 29.367 435.44 29.1508C435.054 28.9269 434.653 28.7569 434.237 28.6408C433.644 28.4753 433.107 28.4501 432.626 28.5653C432.148 28.6727 431.736 28.9148 431.39 29.2917C431.046 29.661 430.787 30.1576 430.613 30.7818C430.439 31.406 430.402 31.9689 430.503 32.4704C430.606 32.9643 430.841 33.387 431.208 33.7385C431.578 34.0823 432.074 34.3413 432.698 34.5154C433.014 34.6035 433.324 34.6565 433.626 34.6744C433.928 34.6922 434.216 34.6728 434.489 34.6162L434.134 35.0404L434.811 32.613L432.314 31.9167L432.692 30.5643L436.807 31.712L435.578 36.1159C435.11 36.2178 434.586 36.2502 434.006 36.2132C433.427 36.1762 432.86 36.0803 432.305 35.9256Z"
    )
    .attr("fill", "white");
  shapes
    .append("circle")
    .attr("cx", "330")
    .attr("cy", "129")
    .attr("r", "6")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "329")
    .attr("cy", "223")
    .attr("r", "6")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "230.009")
    .attr("cy", "149.915")
    .attr("r", "6")
    .attr("transform", "rotate(-31.1953 230.009 149.915)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "277.841")
    .attr("cy", "230.841")
    .attr("r", "6")
    .attr("transform", "rotate(-31.1953 277.841 230.841)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "154.761")
    .attr("cy", "224.882")
    .attr("r", "6")
    .attr("transform", "rotate(-62.542 154.761 224.882)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "237.711")
    .attr("cy", "269.113")
    .attr("r", "6")
    .attr("transform", "rotate(-62.542 237.711 269.113)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "125.016")
    .attr("cy", "323.361")
    .attr("r", "6")
    .attr("transform", "rotate(-90.1542 125.016 323.361)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "219.019")
    .attr("cy", "324.108")
    .attr("r", "6")
    .attr("transform", "rotate(-90.1542 219.019 324.108)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "155.768")
    .attr("cy", "427.153")
    .attr("r", "6")
    .attr("transform", "rotate(-122.029 155.768 427.153)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "235.989")
    .attr("cy", "378.148")
    .attr("r", "6")
    .attr("transform", "rotate(-122.029 235.989 378.148)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "231.595")
    .attr("cy", "500.918")
    .attr("r", "6")
    .attr("transform", "rotate(-152.794 231.595 500.918)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "275.461")
    .attr("cy", "417.775")
    .attr("r", "6")
    .attr("transform", "rotate(-152.794 275.461 417.775)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "327.785")
    .attr("cy", "523.123")
    .attr("r", "6")
    .attr("transform", "rotate(180 327.785 523.123)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "328.785")
    .attr("cy", "429.123")
    .attr("r", "6")
    .attr("transform", "rotate(180 328.785 429.123)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "428.539")
    .attr("cy", "493.324")
    .attr("r", "6")
    .attr("transform", "rotate(149.017 428.539 493.324)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "381.007")
    .attr("cy", "412.221")
    .attr("r", "6")
    .attr("transform", "rotate(149.017 381.007 412.221)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "499.136")
    .attr("cy", "422.756")
    .attr("r", "6")
    .attr("transform", "rotate(120.942 499.136 422.756)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "419.028")
    .attr("cy", "373.566")
    .attr("r", "6")
    .attr("transform", "rotate(120.942 419.028 373.566)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "529.046")
    .attr("cy", "324.202")
    .attr("r", "6")
    .attr("transform", "rotate(89.6001 529.046 324.202)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "435.041")
    .attr("cy", "323.858")
    .attr("r", "6")
    .attr("transform", "rotate(89.6001 435.041 323.858)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "501.736")
    .attr("cy", "224.845")
    .attr("r", "6")
    .attr("transform", "rotate(59.2464 501.736 224.845)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "420.443")
    .attr("cy", "272.052")
    .attr("r", "6")
    .attr("transform", "rotate(59.2464 420.443 272.052)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "428.271")
    .attr("cy", "151.88")
    .attr("r", "6")
    .attr("transform", "rotate(28.0904 428.271 151.88)")
    .attr("fill", "#3F4546");
  shapes
    .append("circle")
    .attr("cx", "383.128")
    .attr("cy", "234.337")
    .attr("r", "6")
    .attr("transform", "rotate(28.0904 383.128 234.337)")
    .attr("fill", "#3F4546");
  const defs = container.append("defs");
  const filter = defs
    .append("filter")
    .attr("id", "filter0_d_32_931")
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", "658")
    .attr("height", "658")
    .attr("filterUnits", "userSpaceOnUse")
    .attr("color-interpolation-filters", "sRGB");
  filter
    .append("feFlood")
    .attr("flood-opacity", "0")
    .attr("result", "BackgroundImageFix");
  filter
    .append("feColorMatrix")
    .attr("in", "SourceAlpha")
    .attr("type", "matrix")
    .attr("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0")
    .attr("result", "hardAlpha");
  filter.append("feOffset").attr("dy", "4");
  filter.append("feGaussianBlur").attr("stdDeviation", "2");
  filter.append("feComposite").attr("in2", "hardAlpha").attr("operator", "out");
  filter
    .append("feColorMatrix")
    .attr("type", "matrix")
    .attr("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0");
  filter
    .append("feBlend")
    .attr("mode", "normal")
    .attr("in2", "BackgroundImageFix")
    .attr("result", "effect1_dropShadow_32_931");
  filter
    .append("feBlend")
    .attr("mode", "normal")
    .attr("in", "SourceGraphic")
    .attr("in2", "effect1_dropShadow_32_931")
    .attr("result", "shape");
};

export default d3KPIWheel;
