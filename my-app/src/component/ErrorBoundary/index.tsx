import React, { ReactNode, ErrorInfo } from 'react';

type Props = {
  children: ReactNode;
};
type State = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  backman: ReactNode | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      backman: this.props.children,
    };
  }
  static getDerivedStateFromError(): { hasError: boolean } {
    // 次のレンダリングでフォールバック UI が表示されるように状態を更新します。
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // エラー報告サービスにエラーを記録することもできます。
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      console.log('\x1b[32mJavaScript のエラー発生\x1b[0m');
      console.error(this.state.error?.message);
      console.error(this.state.errorInfo?.componentStack);

      // エラー時の表示
      return this.state.backman;
      // <div>
      //   {/* <h1>JavaScriptのエラー</h1>
      //    <pre>{this.state.error?.message}</pre>
      //    <pre>{this.state.errorInfo?.componentStack}</pre> */}
      // </div>
    }
    return this.props.children;
  }
}
