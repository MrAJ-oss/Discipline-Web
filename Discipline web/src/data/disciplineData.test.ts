import test from 'node:test';
import assert from 'node:assert/strict';
import { FEATURES, STEPS, TEAM_MEMBERS } from './disciplineData';

test('features data contains exactly 7 items with valid keys', () => {
  assert.equal(FEATURES.length, 7);
  assert.equal(FEATURES[0].title, 'Alarms with a purpose');
  assert.equal(FEATURES[6].title, 'Zeni — AI Pet');
});

test('steps data contains 4 loop steps in order', () => {
  assert.equal(STEPS.length, 4);
  assert.deepEqual(STEPS.map(s => s.number), ['01', '02', '03', '04']);
  assert.equal(STEPS[0].title, 'Wake');
  assert.equal(STEPS[3].title, 'Review & repeat');
});

test('team members data has 4 members with Pranav Veer completely removed', () => {
  assert.equal(TEAM_MEMBERS.length, 4);
  assert.equal(TEAM_MEMBERS.find(m => m.name.toLowerCase().includes('pranav')), undefined);
  for (const member of TEAM_MEMBERS) {
    if (member.role) {
      assert.equal(member.role.toLowerCase().includes('pranav'), false);
    }
  }

  const anuj = TEAM_MEMBERS.find(m => m.name === 'Anuj Joshi');
  assert.ok(anuj);
  assert.deepEqual(anuj?.tags, ['App Designer', 'Developer']);
  assert.equal(anuj?.image, '/team/anuj-joshi.jpeg');
  assert.equal(anuj?.link?.url, 'https://oskfun.in');

  const ashish = TEAM_MEMBERS.find(m => m.name === 'Ashish Tat');
  assert.ok(ashish);
  assert.deepEqual(ashish?.tags, ['Website Designer']);
  assert.equal(ashish?.image, '/team/ashish-tat.jpeg');

  const atharva = TEAM_MEMBERS.find(m => m.name === 'Atharva Nikam');
  assert.ok(atharva);
  assert.equal(atharva?.image, '/team/atharva-nikam.jpeg');

  const kashyap = TEAM_MEMBERS.find(m => m.name === 'Kashyap Chavan');
  assert.ok(kashyap);
});
