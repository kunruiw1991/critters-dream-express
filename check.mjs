import assert from 'node:assert/strict';
import {levels,initial,solution,trace,key} from './engine.mjs';
for(const l of levels){const board=initial(l);assert.equal(trace(l,board).win,false);assert.equal(l.path.length-Object.keys(board).length,l.missing.length);const sol=solution(l);const result=trace(l,sol);assert.equal(result.win,true,l.name);assert.equal(result.picked.length,Object.keys(l.friends).length);for(const i of l.missing){const broken=structuredClone(sol);delete broken[key(l.path[i])];assert.equal(trace(l,broken).win,false);const turned=structuredClone(sol);turned[key(l.path[i])]=turned[key(l.path[i])].map(d=>(d+1)%4);assert.equal(trace(l,turned).win,false)}}
console.log('All 3 solutions, all 13 missing-track cases, and all 13 rotated-track cases pass.');

const {journeySegments,sampleSegment}=await import('./engine.mjs');
for(const l of levels){
 const board=solution(l),result=trace(l,board),segments=journeySegments(l,board,result.route);
 assert.equal(segments.length,l.path.length);
 for(let i=0;i<segments.length;i++){
  assert.ok(segments[i].length>0);
  const end=sampleSegment(segments[i],1);
  assert.ok(Number.isFinite(end.x)&&Number.isFinite(end.y)&&Number.isFinite(end.angle));
  if(i<segments.length-1){const next=sampleSegment(segments[i+1],0);assert.ok(Math.abs(end.x-next.x)<.001&&Math.abs(end.y-next.y)<.001,'Train path stays continuous across tile boundaries');}
 }
 assert.deepEqual(segments.filter(s=>s.friend).map(s=>s.friend),Object.values(l.friends));
 const final=sampleSegment(segments.at(-1),1);assert.equal(final.x,l.path.at(-1)[0]*120+60);assert.equal(final.y,l.path.at(-1)[1]*120+60);
}
console.log('Curved train paths, passenger pickups, and picnic arrival positions pass for all 3 puzzles.');
