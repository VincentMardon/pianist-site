export type FieldName = 'name' | 'email' | 'subject' | 'message';

export type FieldValues = Record<FieldName, string>;
export type TouchedFields = Record<FieldName, boolean>;

export type FieldStatus = 'idle' | 'valid' | 'invalid';
