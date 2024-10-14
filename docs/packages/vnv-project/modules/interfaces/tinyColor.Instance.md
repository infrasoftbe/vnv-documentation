[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / [tinyColor](../modules/tinyColor.md) / Instance

# Interface: Instance

[tinyColor](../modules/tinyColor.md).Instance

## Table of contents

### Methods

- [analogous](tinyColor.Instance.md#analogous)
- [brighten](tinyColor.Instance.md#brighten)
- [clone](tinyColor.Instance.md#clone)
- [complement](tinyColor.Instance.md#complement)
- [darken](tinyColor.Instance.md#darken)
- [desaturate](tinyColor.Instance.md#desaturate)
- [getAlpha](tinyColor.Instance.md#getalpha)
- [getBrightness](tinyColor.Instance.md#getbrightness)
- [getFormat](tinyColor.Instance.md#getformat)
- [getLuminance](tinyColor.Instance.md#getluminance)
- [getOriginalInput](tinyColor.Instance.md#getoriginalinput)
- [greyscale](tinyColor.Instance.md#greyscale)
- [isDark](tinyColor.Instance.md#isdark)
- [isLight](tinyColor.Instance.md#islight)
- [isValid](tinyColor.Instance.md#isvalid)
- [lighten](tinyColor.Instance.md#lighten)
- [monochromatic](tinyColor.Instance.md#monochromatic)
- [saturate](tinyColor.Instance.md#saturate)
- [setAlpha](tinyColor.Instance.md#setalpha)
- [spin](tinyColor.Instance.md#spin)
- [splitcomplement](tinyColor.Instance.md#splitcomplement)
- [tetrad](tinyColor.Instance.md#tetrad)
- [toFilter](tinyColor.Instance.md#tofilter)
- [toHex](tinyColor.Instance.md#tohex)
- [toHex8](tinyColor.Instance.md#tohex8)
- [toHex8String](tinyColor.Instance.md#tohex8string)
- [toHexString](tinyColor.Instance.md#tohexstring)
- [toHsl](tinyColor.Instance.md#tohsl)
- [toHslString](tinyColor.Instance.md#tohslstring)
- [toHsv](tinyColor.Instance.md#tohsv)
- [toHsvString](tinyColor.Instance.md#tohsvstring)
- [toName](tinyColor.Instance.md#toname)
- [toPercentageRgb](tinyColor.Instance.md#topercentagergb)
- [toPercentageRgbString](tinyColor.Instance.md#topercentagergbstring)
- [toRgb](tinyColor.Instance.md#torgb)
- [toRgbString](tinyColor.Instance.md#torgbstring)
- [toString](tinyColor.Instance.md#tostring)
- [triad](tinyColor.Instance.md#triad)

## Methods

### analogous

▸ **analogous**(`results?`, `slices?`): [`Instance`](tinyColor.Instance.md)[]

Gets an analogous color scheme based off of the current color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `results?` | `number` | The amount of results to return. Default value: 6. |
| `slices?` | `number` | The amount to slice the input color by. Default value: 30. |

#### Returns

[`Instance`](tinyColor.Instance.md)[]

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:629

___

### brighten

▸ **brighten**(`amount?`): [`Instance`](tinyColor.Instance.md)

Brighten the color a given amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount to brighten by. The valid range is 0 to 100. Default value: 10. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:581

___

### clone

▸ **clone**(): [`Instance`](tinyColor.Instance.md)

Gets a new instance with the current color

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:565

___

### complement

▸ **complement**(): [`Instance`](tinyColor.Instance.md)

Gets the complement of the current color

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:634

___

### darken

▸ **darken**(`amount?`): [`Instance`](tinyColor.Instance.md)

Darken the color a given amount.
 Providing 100 will always return black.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount to darken by. The valid range is 0 to 100. Default value: 10. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:590

___

### desaturate

▸ **desaturate**(`amount?`): [`Instance`](tinyColor.Instance.md)

Desaturate the color a given amount.
 Providing 100 will is the same as calling greyscale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount to desaturate by. The valid range is 0 to 100. Default value: 10. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:598

___

### getAlpha

▸ **getAlpha**(): `number`

Returns the alpha value of the color

#### Returns

`number`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:461

___

### getBrightness

▸ **getBrightness**(): `number`

Returns the perceived brightness of the color, from 0-255.

#### Returns

`number`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:466

___

### getFormat

▸ **getFormat**(): `string`

Returns the format used to create the tinycolor instance.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:456

___

### getLuminance

▸ **getLuminance**(): `number`

Returns the perceived luminance of a color, from 0-1.

#### Returns

`number`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:471

___

### getOriginalInput

▸ **getOriginalInput**(): [`ColorInput`](../modules/tinyColor.md#colorinput)

Returns the input passed into the constructer used to create the tinycolor instance.

#### Returns

[`ColorInput`](../modules/tinyColor.md#colorinput)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:451

___

### greyscale

▸ **greyscale**(): [`Instance`](tinyColor.Instance.md)

Completely desaturates a color into greyscale.
Same as calling desaturate(100).

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:612

___

### isDark

▸ **isDark**(): `boolean`

Return an indication whether the color's perceived brightness is dark.

#### Returns

`boolean`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:436

___

### isLight

▸ **isLight**(): `boolean`

Return an indication whether the color's perceived brightness is light.

#### Returns

`boolean`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:441

___

### isValid

▸ **isValid**(): `boolean`

Return an indication whether the color was successfully parsed.

#### Returns

`boolean`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:446

___

### lighten

▸ **lighten**(`amount?`): [`Instance`](tinyColor.Instance.md)

Lighten the color a given amount. Providing 100 will always return white.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount to lighten by. The valid range is 0 to 100. Default value: 10. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:573

___

### monochromatic

▸ **monochromatic**(`results?`): [`Instance`](tinyColor.Instance.md)[]

Gets a monochromatic color scheme based off of the current color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `results?` | `number` | The amount of results to return. Default value: 6. |

#### Returns

[`Instance`](tinyColor.Instance.md)[]

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:642

___

### saturate

▸ **saturate**(`amount?`): [`Instance`](tinyColor.Instance.md)

Saturate the color a given amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | `number` | The amount to saturate by. The valid range is 0 to 100. Default value: 10. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:606

___

### setAlpha

▸ **setAlpha**(`alpha`): [`Instance`](tinyColor.Instance.md)

Sets the alpha value on the current color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `number` | The new alpha value. The accepted range is 0-1. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:478

___

### spin

▸ **spin**(`amount`): [`Instance`](tinyColor.Instance.md)

Spin the hue a given amount. Calling with 0, 360, or -360 will do nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The amount to spin by. The valid range is -360 to 360. |

#### Returns

[`Instance`](tinyColor.Instance.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:619

___

### splitcomplement

▸ **splitcomplement**(): [[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

Gets a split complement color scheme based off of the current color.

#### Returns

[[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:647

___

### tetrad

▸ **tetrad**(): [[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

Gets a tetrad based off of the current color.

#### Returns

[[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:657

___

### toFilter

▸ **toFilter**(): `string`

Returns the color represented as a Microsoft filter for use in old versions of IE.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:552

___

### toHex

▸ **toHex**(): `string`

Returns the hex value of the color.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:505

___

### toHex8

▸ **toHex8**(): `string`

Returns the hex 8 value of the color.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:515

___

### toHex8String

▸ **toHex8String**(): `string`

Returns the hex 8  value of the color -with a # appened.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:520

___

### toHexString

▸ **toHexString**(): `string`

Returns the hex value of the color -with a # appened.

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:510

___

### toHsl

▸ **toHsl**(): [`HSLA`](tinyColor.ColorFormats.HSLA.md)

Returns the object as a HSLA object.

#### Returns

[`HSLA`](tinyColor.ColorFormats.HSLA.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:494

___

### toHslString

▸ **toHslString**(): `string`

Returns the hsla values interpolated into a string with the following format:
"hsla(xxx, xxx, xxx, xx)".

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:500

___

### toHsv

▸ **toHsv**(): [`HSVA`](tinyColor.ColorFormats.HSVA.md)

Returns the object as a HSVA object.

#### Returns

[`HSVA`](tinyColor.ColorFormats.HSVA.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:483

___

### toHsvString

▸ **toHsvString**(): `string`

Returns the hsva values interpolated into a string with the following format:
"hsva(xxx, xxx, xxx, xx)".

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:489

___

### toName

▸ **toName**(): `string` \| ``false``

The 'real' name of the color -if there is one.

#### Returns

`string` \| ``false``

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:547

___

### toPercentageRgb

▸ **toPercentageRgb**(): [`PRGBA`](tinyColor.ColorFormats.PRGBA.md)

Returns the object as a RGBA object.

#### Returns

[`PRGBA`](tinyColor.ColorFormats.PRGBA.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:536

___

### toPercentageRgbString

▸ **toPercentageRgbString**(): `string`

Returns the RGBA relative values interpolated into a string with the following format:
"RGBA(xxx, xxx, xxx, xx)".

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:542

___

### toRgb

▸ **toRgb**(): [`RGBA`](tinyColor.ColorFormats.RGBA.md)

Returns the object as a RGBA object.

#### Returns

[`RGBA`](tinyColor.ColorFormats.RGBA.md)

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:525

___

### toRgbString

▸ **toRgbString**(): `string`

Returns the RGBA values interpolated into a string with the following format:
"RGBA(xxx, xxx, xxx, xx)".

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:531

___

### toString

▸ **toString**(`format?`): `string`

String representation of the color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format?` | ``"name"`` \| ``"rgb"`` \| ``"prgb"`` \| ``"hex"`` \| ``"hex6"`` \| ``"hex3"`` \| ``"hex4"`` \| ``"hex8"`` \| ``"hsl"`` \| ``"hsv"`` | The format to be used when displaying the string representation. The accepted values are: "rgb", "prgb", "hex6", "hex3", "hex8", "name", "hsl", "hsv". |

#### Returns

`string`

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:560

___

### triad

▸ **triad**(): [[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

Gets a triad based off of the current color.

#### Returns

[[`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md), [`Instance`](tinyColor.Instance.md)]

#### Defined in

node_modules/@types/tinycolor2/index.d.ts:652
