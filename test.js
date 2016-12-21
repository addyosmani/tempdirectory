import {tmpdir} from 'os';
import test from 'ava';
import m from './';

test(t => {
	t.true(m().indexOf(tmpdir()) !== -1);
});
