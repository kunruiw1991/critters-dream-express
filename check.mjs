import assert from 'node:assert/strict';
import {levels,initial,solution,trace,key} from './engine.mjs';
for(const l of levels){const board=initial(l);assert.equal(trace(l,board).win,false);assert.equal(l.path.length-Object.keys(board).length,l.missing.length);const sol=solution(l);const result=trace(l,sol);assert.equal(result.win,true,l.name);assert.equal(result.picked.length,Object.keys(l.friends).length);for(const i of l.missing){const broken=structuredClone(sol);delete broken[key(l.path[i])];assert.equal(trace(l,broken).win,false);const turned=structuredClone(sol);turned[key(l.path[i])]=turned[key(l.path[i])].map(d=>(d+1)%4);assert.equal(trace(l,turned).win,false)}}
console.log('All 3 solutions, all 14 missing-track cases, and all 14 rotated-track cases pass.');
