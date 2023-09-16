import React from 'react';
import { PaginationProps } from '@mui/material';

interface PaginationComponentProps extends PaginationProps {
    count: number;
}

declare const PaginationComponent: React.FC<PaginationComponentProps>;

export default PaginationComponent;
