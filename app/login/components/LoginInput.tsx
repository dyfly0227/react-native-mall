import { Text, View } from 'react-native';
import { Input } from '@rneui/base';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { validateInput } from '../../../utils/rule';
import GetSvg from '../../../components/GetSvg';

interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorMsg?: string;
  rules?: string[];
  type?: string;
  tip?: string;
}

const LoginInput = (props: InputProps) => {
  const [focus, setFocus] = useState(false);
  const [msg, setMsg] = useState('');
  const [hide, setHide] = useState(false);
  const [secure, setSecure] = useState(false);
  useEffect(() => {
    if (props.type && props.type === 'password') {
      setSecure(true);
    } else {
      setSecure(false);
    }
  }, [props.type]);
  const isCorrect = (val: string) => {
    if (!props.rules) {
      return true;
    } else {
      return (
        props.rules.filter((item) => {
          if (item.includes('|')) {
            return !item.split('|').reduce((a, t) => {
              a = a || validateInput(t, val);
              return a;
            }, false);
          } else {
            return !validateInput(item, val);
          }
        }).length === 0
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.placeholder,
          {
            top: focus || props.value !== '' ? 0 : 22,
          },
        ]}
      >
        {props.placeholder}
      </Text>
      {props.type && props.type === 'password' && (
        <View
          style={styles.eyeIcon}
          onTouchEnd={() => {
            setHide(!hide);
            setSecure(!secure);
          }}
        >
          <GetSvg name={hide ? 'eye' : 'eyeClose'} color="" />
        </View>
      )}
      <Input
        inputStyle={styles.input}
        containerStyle={styles.inputWrap}
        secureTextEntry={secure}
        onFocus={() => {
          setFocus(true);
          setMsg('');
        }}
        onBlur={() => {
          if (!isCorrect(props.value)) {
            setMsg(props.errorMsg || '');
          }
          setFocus(false);
        }}
        onChangeText={(value) => {
          props.setValue(value);
        }}
      />
      <>{props.tip && <Text style={styles.tipMsg}>{props.tip || ''}</Text>}</>
      <>{msg !== '' && <Text style={styles.errorMsg}>{msg}</Text>}</>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  placeholder: {
    color: '#C8C9CC',
    fontSize: 14,
    position: 'absolute',
    zIndex: -1,
  },
  placeholderActive: {
    top: 0,
  },
  inputWrap: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  input: {
    height: 65,
    border: 0,
  },
  errorMsg: {
    fontSize: 14,
    color: '#EE0A24',
  },
  tipMsg: {
    fontSize: 14,
    color: '#07C160',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 20,
    zIndex: 2,
  },
});

export default LoginInput;
