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

export class EditRequest {
  constructor(
    public readonly id: number,
    public readonly seekerId: number,
    public readonly editType: EditType,
    public readonly content: string | null
  ) {}

  static fromObject(obj: any): EditRequest {
    if(
      obj.id === null || obj.id === undefined ||
      obj.seekerId === null || obj.seekerId === undefined ||
      obj.editType === null || obj.editType === undefined
    ) {
      throw new Error('Any required fields are not found');
    }

    return new EditRequest(obj.id, obj.seekerId, EditType.fromNumber(obj.editType), obj.content || null);
  }
}

export class InputEditRequest {
  constructor(
    public readonly seekerId: number,
    public readonly editType: number,
    public readonly content: string | null,
    public readonly title: string
  ) {}

  toSnake(): any {
    return {
      seeker_id: this.seekerId,
      edit_type: this.editType,
      content: this.content,
      title: this.title
    };
  }

  static fromObject(obj: any): InputEditRequest {
    if(
      obj.seekerId === null || obj.seekerId === undefined ||
      obj.editType === null || obj.editType === undefined ||
      !obj.title
    ) {
      throw new Error('Any required fields are not found');
    }

    return new InputEditRequest(obj.seekerId, obj.editType, obj.content || null, obj.title);
  }
}
