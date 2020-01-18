/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check } from 'k6';


const fakeRequests = () => {
  for (let id = 9372635; id <= 9373635; id += 1) {
    const res = http.get(http.url`http://localhost:3001/?id=${id}`);
    check(res, {
      'response code was 200': res => res.status === 200,
    });
  }
};


export default function () {
  fakeRequests();
}
