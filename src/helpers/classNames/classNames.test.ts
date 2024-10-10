import { classNames } from './classNames';

describe('classNames helper', () => {
    test('add main class (first param)', () => {
        const expected = 'mainClass';
        expect(classNames('mainClass')).toBe(expected);
    });

    test('add extra classes (second param)', () => {
        const expected = 'mainClass extra extra2';
        expect(classNames('mainClass', ['extra', 'extra2'])).toBe(expected);
    });

    test('add mods (third param)', () => {
        const expected = 'mainClass extra hovered';
        expect(classNames('mainClass', ['extra'], { hovered: true })).toBe(expected);
    });

    test('add mods (third param) with false value', () => {
        const expected = 'mainClass extra';
        expect(classNames('mainClass', ['extra'], { hovered: false })).toBe(expected);
    });

    test('add mods (third param) with undefined', () => {
        const expected = 'mainClass extra';
        expect(classNames('mainClass', ['extra'], { hovered: undefined })).toBe(expected);
    });

    test('add main and mods', () => {
        const expected = 'mainClass hovered';
        expect(classNames('mainClass', [], { hovered: true })).toBe(expected);
    });
});
