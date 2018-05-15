import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="LINK">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree.props.className).toEqual('normal');

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree.props.className).toEqual('hovered');

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree.props.className).toEqual('normal');
});