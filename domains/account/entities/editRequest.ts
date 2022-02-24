export const EditTypeKind = {
  MODIFY: 0,
  DELETE: 1
} as const;
export type EditTypeKind = typeof EditTypeKind[keyof typeof EditTypeKind];
export const EditTypeKindValues = Object.values(EditTypeKind);

export class EditType {
  public readonly kind: EditTypeKind;

  constructor(kind: EditTypeKind) {
    this.kind = kind;
  }

  static all(): EditType[] {
    return EditTypeKindValues.map((value: number) => EditType.fromNumber(value));
  }

  toString(): string | null {
    return EditType.toString(this.kind);
  }

  static toString(kind: EditTypeKind): string {
    switch(kind) {
      case EditTypeKind.MODIFY:
        return '登録情報の変更';
      case EditTypeKind.DELETE:
        return '退会（登録情報削除）';
      default:
        return '';
    }
  }

  static fromNumber(value: number): EditType {
    switch(value) {
      case 0:
        return new EditType(EditTypeKind.MODIFY);
      case 1:
        return new EditType(EditTypeKind.DELETE);
      default:
        throw new Error('Invalid value');
    }
  }
}

export class NewEditRequest {
  constructor(
    public readonly useId: string,
    public readonly editType: EditType,
    public readonly content: string
  ) {}
}
