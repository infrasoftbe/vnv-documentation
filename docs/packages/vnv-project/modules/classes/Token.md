[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / Token

# Class: Token

## Hierarchy

- `String`

  ↳ **`Token`**

## Table of contents

### Constructors

- [constructor](Token.md#constructor)

### Properties

- [length](Token.md#length)

### Accessors

- [analitics](Token.md#analitics)
- [isValid](Token.md#isvalid)

### Methods

- [[iterator]](Token.md#[iterator])
- [anchor](Token.md#anchor)
- [at](Token.md#at)
- [big](Token.md#big)
- [blink](Token.md#blink)
- [bold](Token.md#bold)
- [charAt](Token.md#charat)
- [charCodeAt](Token.md#charcodeat)
- [codePointAt](Token.md#codepointat)
- [concat](Token.md#concat)
- [endsWith](Token.md#endswith)
- [fixed](Token.md#fixed)
- [fontcolor](Token.md#fontcolor)
- [fontsize](Token.md#fontsize)
- [includes](Token.md#includes)
- [indexOf](Token.md#indexof)
- [italics](Token.md#italics)
- [lastIndexOf](Token.md#lastindexof)
- [link](Token.md#link)
- [localeCompare](Token.md#localecompare)
- [match](Token.md#match)
- [matchAll](Token.md#matchall)
- [normalize](Token.md#normalize)
- [padEnd](Token.md#padend)
- [padStart](Token.md#padstart)
- [repeat](Token.md#repeat)
- [replace](Token.md#replace)
- [search](Token.md#search)
- [slice](Token.md#slice)
- [small](Token.md#small)
- [split](Token.md#split)
- [startsWith](Token.md#startswith)
- [strike](Token.md#strike)
- [sub](Token.md#sub)
- [substr](Token.md#substr)
- [substring](Token.md#substring)
- [sup](Token.md#sup)
- [toLocaleLowerCase](Token.md#tolocalelowercase)
- [toLocaleUpperCase](Token.md#tolocaleuppercase)
- [toLowerCase](Token.md#tolowercase)
- [toString](Token.md#tostring)
- [toUpperCase](Token.md#touppercase)
- [trim](Token.md#trim)
- [trimEnd](Token.md#trimend)
- [trimLeft](Token.md#trimleft)
- [trimRight](Token.md#trimright)
- [trimStart](Token.md#trimstart)
- [valueOf](Token.md#valueof)
- [analitics](Token.md#analitics-1)
- [fromCharCode](Token.md#fromcharcode)
- [fromCodePoint](Token.md#fromcodepoint)
- [getItemIterator](Token.md#getitemiterator)
- [getPrefix](Token.md#getprefix)
- [getYear](Token.md#getyear)
- [getYearIterator](Token.md#getyeariterator)
- [isValid](Token.md#isvalid-1)
- [raw](Token.md#raw)

## Constructors

### constructor

• **new Token**(`value?`): [`Token`](Token.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

[`Token`](Token.md)

#### Inherited from

String.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:535

## Properties

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

String.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:517

## Accessors

### analitics

• `get` **analitics**(): `any`

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:81](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L81)

___

### isValid

• `get` **isValid**(): `any`

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L82)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`string`\>

Iterator

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

String.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:238

___

### anchor

▸ **anchor**(`name`): `string`

Returns an `<a>` HTML anchor element and sets the name attribute to the text value

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.anchor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:459

___

### at

▸ **at**(`index`): `string`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`string`

#### Inherited from

String.at

#### Defined in

node_modules/@types/node/globals.d.ts:133

___

### big

▸ **big**(): `string`

Returns a `<big>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.big

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:465

___

### blink

▸ **blink**(): `string`

Returns a `<blink>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.blink

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:471

___

### bold

▸ **bold**(): `string`

Returns a `<b>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.bold

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:477

___

### charAt

▸ **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | The zero-based index of the desired character. |

#### Returns

`string`

#### Inherited from

String.charAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:418

___

### charCodeAt

▸ **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

#### Returns

`number`

#### Inherited from

String.charCodeAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:424

___

### codePointAt

▸ **codePointAt**(`pos`): `number`

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`number`

#### Inherited from

String.codePointAt

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:406

___

### concat

▸ **concat**(`...strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...strings` | `string`[] | The strings to append to the end of the string. |

#### Returns

`string`

#### Inherited from

String.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:430

___

### endsWith

▸ **endsWith**(`searchString`, `endPosition?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `endPosition?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.endsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:422

___

### fixed

▸ **fixed**(): `string`

Returns a `<tt>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fixed

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:483

___

### fontcolor

▸ **fontcolor**(`color`): `string`

Returns a `<font>` HTML element and sets the color attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontcolor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:489

___

### fontsize

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:495

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:501

___

### includes

▸ **includes**(`searchString`, `position?`): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | search string |
| `position?` | `number` | If position is undefined, 0 is assumed, so as to search all of the String. |

#### Returns

`boolean`

#### Inherited from

String.includes

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:415

___

### indexOf

▸ **indexOf**(`searchString`, `position?`): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for in the string |
| `position?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`number`

#### Inherited from

String.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:437

___

### italics

▸ **italics**(): `string`

Returns an `<i>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.italics

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:507

___

### lastIndexOf

▸ **lastIndexOf**(`searchString`, `position?`): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for. |
| `position?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

`number`

#### Inherited from

String.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:444

___

### link

▸ **link**(`url`): `string`

Returns an `<a>` HTML element and sets the href attribute value

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.link

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:513

___

### localeCompare

▸ **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:450

▸ **localeCompare**(`that`, `locales?`, `options?`): `number`

Determines whether two strings are equivalent in the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
| `options?` | `CollatorOptions` | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details. |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4531

▸ **localeCompare**(`that`, `locales?`, `options?`): `number`

Determines whether two strings are equivalent in the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |
| `locales?` | `LocalesArgument` | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
| `options?` | `CollatorOptions` | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details. |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:41

___

### match

▸ **match**(`regexp`): `RegExpMatchArray`

Matches a string with a regular expression, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:456

▸ **match**(`matcher`): `RegExpMatchArray`

Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matcher` | `Object` | An object that supports being matched against. |
| `matcher.[match]` | (`string`: `string`) => `RegExpMatchArray` | - |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:241

___

### matchAll

▸ **matchAll**(`regexp`): `IterableIterator`\<`RegExpExecArray`\>

Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`IterableIterator`\<`RegExpExecArray`\>

#### Inherited from

String.matchAll

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:27

___

### normalize

▸ **normalize**(`form`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | ``"NFC"`` \| ``"NFD"`` \| ``"NFKC"`` \| ``"NFKD"`` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:430

▸ **normalize**(`form?`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form?` | `string` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:438

___

### padEnd

▸ **padEnd**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padEnd

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:44

___

### padStart

▸ **padStart**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padStart

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:31

___

### repeat

▸ **repeat**(`count`): `string`

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | number of copies to append |

#### Returns

`string`

#### Inherited from

String.repeat

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:445

___

### replace

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string or regular expression to search for. |
| `replaceValue` | `string` | A string containing the text to replace. When the searchValue is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of searchValue is replaced. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:463

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:470

▸ **replace**(`searchValue`, `replaceValue`): `string`

Passes a string and replaceValue to the `[Symbol.replace]` method on searchValue. This method is expected to implement its own replacement algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | An object that supports searching for and replacing matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replaceValue`: `string`) => `string` | - |
| `replaceValue` | `string` | The replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:248

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using an object that supports replacement within a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | A object can search for and replace matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replacer`: (`substring`: `string`, ...`args`: `any`[]) => `string`) => `string` | - |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:255

___

### search

▸ **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | The regular expression pattern and applicable flags. |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:476

▸ **search**(`searcher`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searcher` | `Object` | An object which supports searching within a string. |
| `searcher.[search]` | (`string`: `string`) => `number` | - |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:261

___

### slice

▸ **slice**(`start?`, `end?`): `string`

Returns a section of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The index to the beginning of the specified portion of stringObj. |
| `end?` | `number` | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

#### Returns

`string`

#### Inherited from

String.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:484

___

### small

▸ **small**(): `string`

Returns a `<small>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.small

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:519

___

### split

▸ **split**(`separator`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` \| `RegExp` | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:491

▸ **split**(`splitter`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `splitter` | `Object` | An object that can split a string. |
| `splitter.[split]` | (`string`: `string`, `limit?`: `number`) => `string`[] | - |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:268

___

### startsWith

▸ **startsWith**(`searchString`, `position?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.startsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:452

___

### strike

▸ **strike**(): `string`

Returns a `<strike>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.strike

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:525

___

### sub

▸ **sub**(): `string`

Returns a `<sub>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.sub

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:531

___

### substr

▸ **substr**(`from`, `length?`): `string`

Gets a substring beginning at the specified location and having the specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The starting position of the desired substring. The index of the first character in the string is zero. |
| `length?` | `number` | The number of characters to include in the returned substring. |

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.substr

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:526

___

### substring

▸ **substring**(`start`, `end?`): `string`

Returns the substring at the specified location within a String object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based index number indicating the beginning of the substring. |
| `end?` | `number` | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

#### Returns

`string`

#### Inherited from

String.substring

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:499

___

### sup

▸ **sup**(): `string`

Returns a `<sup>` HTML element

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility

#### Inherited from

String.sup

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:537

___

### toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:505

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `LocalesArgument` |

#### Returns

`string`

#### Inherited from

String.toLocaleLowerCase

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:30

___

### toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:511

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `LocalesArgument` |

#### Returns

`string`

#### Inherited from

String.toLocaleUpperCase

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:33

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

String.toLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:502

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

String.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:412

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

String.toUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:508

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trim

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:514

___

### trimEnd

▸ **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimEnd

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:21

___

### trimLeft

▸ **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimStart` instead

#### Inherited from

String.trimLeft

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:30

___

### trimRight

▸ **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Inherited from

String.trimRight

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:36

___

### trimStart

▸ **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimStart

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:24

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

String.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:529

___

### analitics

▸ **analitics**(`token`): `ITokenAnalysisResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

`ITokenAnalysisResult`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:73](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L73)

___

### fromCharCode

▸ **fromCharCode**(`...codes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codes` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCharCode

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:538

___

### fromCodePoint

▸ **fromCodePoint**(`...codePoints`): `string`

Return the String value whose elements are, in order, the elements in the List elements.
If length is 0, the empty string is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codePoints` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCodePoint

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:545

___

### getItemIterator

▸ **getItemIterator**(`token`): `Number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

`Number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:79](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L79)

___

### getPrefix

▸ **getPrefix**(`token`): ``"RISK"`` \| ``"PR"`` \| ``"ATT"`` \| ``"PO"`` \| ``"DEL"`` \| ``"WRK"`` \| ``"ENT"`` \| ``"MAT"`` \| ``"REQ"`` \| ``"TST"`` \| ``"FIL"`` \| ``"STR"`` \| ``"PRO"`` \| ``"RO"`` \| ``"RIGT"`` \| ``"INV"`` \| ``"USR"`` \| ``"DESCI"`` \| ``"ACTI"`` \| ``"LST"`` \| ``"OBJ"`` \| ``"SYS"`` \| ``"GRP"`` \| ``"ROL"`` \| ``"APC"`` \| ``"WRKLG"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

``"RISK"`` \| ``"PR"`` \| ``"ATT"`` \| ``"PO"`` \| ``"DEL"`` \| ``"WRK"`` \| ``"ENT"`` \| ``"MAT"`` \| ``"REQ"`` \| ``"TST"`` \| ``"FIL"`` \| ``"STR"`` \| ``"PRO"`` \| ``"RO"`` \| ``"RIGT"`` \| ``"INV"`` \| ``"USR"`` \| ``"DESCI"`` \| ``"ACTI"`` \| ``"LST"`` \| ``"OBJ"`` \| ``"SYS"`` \| ``"GRP"`` \| ``"ROL"`` \| ``"APC"`` \| ``"WRKLG"``

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:76](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L76)

___

### getYear

▸ **getYear**(`token`): `Number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

`Number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:77](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L77)

___

### getYearIterator

▸ **getYearIterator**(`token`): `Number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

`Number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:78](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L78)

___

### isValid

▸ **isValid**(`token`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/token.ts:74](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/token.ts#L74)

___

### raw

▸ **raw**(`template`, `...substitutions`): `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `Object` | A well-formed template string call site representation. |
| `template.raw` | `ArrayLike`\<`string`\> \| readonly `string`[] | - |
| `...substitutions` | `any`[] | A set of substitution values. |

#### Returns

`string`

#### Inherited from

String.raw

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:556
