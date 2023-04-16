import { Item } from '..';
import { EL_CLUB, DEPORTES, COMPANY, SUPPORT } from './menus';

export function ItemsContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16  ">
            <Item Links={EL_CLUB} title="EL CLUB" />
            <Item Links={DEPORTES} title="DEPORTES" />
            <Item Links={COMPANY} title="COMPANY" />
            <Item Links={SUPPORT} title="SUPPORT" />
        </div>
    );
}
