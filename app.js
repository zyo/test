
function _view_x3(camera_id)
{
  // -- bind viewpoint
  const v = document.getElementById(camera_id);
  v.setAttribute("centerOfRotation", "0 0 0");
  v.setAttribute("position", "0 0 0");
  v.setAttribute('set_bind','true');
}   

function draw_plane(x, y) {
  // --
  const x3 = document.getElementById('x3d_test');
  // -- 
  const xx = x3.querySelector("plane[def='base_plan_grid']");
  if (!xx) return false;
  xx.setAttribute("size", x + " " + y);
  xx.setAttribute("subdivision", x/2 + " " + y/2);
}

/** */
window.onload = function () {
  console.log('start ' + document.title);
  _view_x3('camera_main');
  draw_plane (10,6);
}