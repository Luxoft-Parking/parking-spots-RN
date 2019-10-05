const primary = '#5E52E4';

export const colors = {
    primary,
    disabled: '#888',
    text: '#333',
    textActive: '#fff',
    tabBorder: primary,
    tabBackground: '#5E52E477',
    black: '#000',
    white: '#fff',
};

export const blankScreenStyle = {
    backgroundColor: '#fff',
};

export const centerViewStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 32,
};

export const headerStyle = {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    padding: 8,
};

export const entryContainerStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
};

export const entryLabelStyle = {
    fontSize: 16,
    color: colors.text,
    padding: 8,
    flex: 1,
};

export const entryValueStyle = {
    ...entryLabelStyle,
    fontWeight: 'bold',
    flex: 2,
};

export const modalTitleStyle = {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    padding: 8,
};

export const descriptionStyle = {
    fontSize: 16,
    color: colors.text,
    padding: 8,
};

export const inputSpacing = {
    marginBottom: 16,
};

export const inputStyle = {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 6,
};

export const modalStyle = {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    margin: 32,
    backgroundColor: 'white',
};
export const modalFullScreenStyle = {
    ...modalStyle,
    margin: 0,
    flex: 1,
};
export const containerStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#000000cc',
};

export const noteStyle = {
    fontStyle: 'italic',
    color: colors.text,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 18,
};

export const bannerTextStyle = {
    fontSize: 16,
    color: colors.text,
};

export const linkStyle = {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    padding: 8,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.primary,
};
