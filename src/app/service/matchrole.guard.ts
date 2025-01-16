import { CanMatchFn } from '@angular/router';

export const matchroleGuard: CanMatchFn = (route, segments) => {
  const userRole = localStorage.getItem('userRole');
  if(route.path === 'admin' && userRole === 'admin'){
    return true;
  }
  else if(route.path === 'empolyee' && userRole === 'empolyee'){
    return true;
  }
  else if(route.path === 'manager' && userRole === 'manager'){
    return
  }
  return false;
};
