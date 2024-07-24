export interface Props {
    size: 'big' | 'medium' | 'regular' | 'small';
    colorScheme: 'primary' | 'secondary';
    label?: string;
    icon?: JSX.Element;
    iconPlacement?: 'left' | 'right';
}
