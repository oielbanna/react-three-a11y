import TestRenderer from 'react-test-renderer';
import { Canvas } from 'react-three-fiber';
import { A11y } from '../dist';
import React from 'react';

describe('When a A11y component is created', () => {
  it('has not test yet', () => {
    const t = TestRenderer.create(
      <Canvas>
        <A11y
          role="content"
          description={`This is a sample description`}
          activationMsg="sample activation message"
          deactivationMsg="sample deactivation message"
          pressedDescription="description when pressed"
          href=""
          showAltText={true}
          actionCall={() => {
            console.log();
          }}
          focusCall={e => {
            console.log(e);
          }}
          tabIndex={0}
        >
          <mesh>
            <boxBufferGeometry />
            <meshStandardMaterial />
          </mesh>
        </A11y>
      </Canvas>
    );

    console.log(t);
  });
});
